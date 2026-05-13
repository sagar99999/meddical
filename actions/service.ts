"use server"
import dbConnect from "@/lib/mongoose"
import Services from "@/models/services"
import { revalidatePath } from "next/cache";
import { imagekit } from "@/lib/image-kit";
import { formSchema } from "@/components/dashboard/service-form"
import * as z from "zod"
import { generateSlug } from "@/lib/utils";

// server action | CREATE service 
export async function createService(payload: z.infer<typeof formSchema>, formData?: FormData | null) {

    try {
        await dbConnect()
        let uploadResponse;

        // 1.✅ check for the image
        if (formData) {
            const imageFile = formData.get("image") as File;
            const arrayBuffer = await imageFile.arrayBuffer()
            const imgBuffer = Buffer.from(arrayBuffer);

            //✅ Upload image to ImageKit
            uploadResponse = await imagekit.upload({
                file: imgBuffer,
                fileName: `img-${Date.now()}-${Math.floor(Math.random() * 99999)}`,
                folder: "/meddical",
            });
        }

        // 2.✅ Generate new slug based on title
        const newSlug = generateSlug(payload.title)

        // 3.✅ Perform creattion
        await Services.create({
            ...payload,
            slug: newSlug,
            image: uploadResponse?.url || "",
            fileId: uploadResponse?.fileId || "",
        });

        // 4.✅ Revoke cached paths
        revalidatePath(`/dashboard/services`);
        revalidatePath(`/services`);
        return { success: true, error: false };
    } catch (error: any) {
        return { success: false, error: error.message || "Failed | Create Service" };
    }
}

// server action | UPDATE service
export async function updateServiceById(id: string, payload: z.infer<typeof formSchema>, formData?: FormData | null) {

    try {
        await dbConnect()
        let uploadResponse;
        let newSlug;

        // 1. ✅ Fetch if the service exists
        const currentService = await Services.findById(id).lean();
        if (!currentService) {
            return { success: false, error: "Service not found" };
        }

        // 2.✅ check for the image
        if (formData) {
            const imageFile = formData.get("image") as File;
            const arrayBuffer = await imageFile.arrayBuffer()
            const imgBuffer = Buffer.from(arrayBuffer);

            // ❌ Delete image on Imagekit
            if (currentService.fileId) {
                await imagekit.deleteFile(currentService.fileId)
            }

            //✅ Upload image to ImageKit
            uploadResponse = await imagekit.upload({
                file: imgBuffer,
                fileName: `img-${Date.now()}-${Math.floor(Math.random() * 99999)}`,
                folder: "/meddical",
            });
        }

        // 4.✅ Generate new slug based on name
        if (payload.title !== currentService.title) {
            newSlug = generateSlug(payload.title)
        }

        // 5.✅ Perform update
        await Services.findByIdAndUpdate(
            id,
            {
                $set: {
                    ...payload,
                    slug: newSlug || currentService.slug,
                    image: uploadResponse?.url || currentService.image,
                    fileId: uploadResponse?.fileId || ""
                }
            },
            {
                new: true,
                runValidators: true,
                context: "query",
            }
        )

        // 6.✅ Revoke cached paths
        revalidatePath(`/dashboard/services`);
        revalidatePath(`/dashboard/services/${payload.slug}`);
        revalidatePath(`/services`);
        revalidatePath(`/services/${payload.slug}`);
        return { success: true, error: false };
    } catch (error: any) {
        return { success: false, error: error.message || "Failed | Service Doctor" };
    }
}

// server action | DELETE service
export async function deleteServiceById(id: string) {
    try {
        await dbConnect()

        // 1. ✅ Fetch if the service exists
        const currentService = await Services.findById(id).lean();
        if (!currentService) {
            return { success: false, error: "Service not found" };
        }

        // 2.❌ Delete image on Imagekit
        if (currentService.fileId) {
            await imagekit.deleteFile(currentService.fileId)
        }

        // 3. ❌ DELETE doctor profile
        await Services.findByIdAndDelete(id)

        // 4. Revoke cached paths
        revalidatePath(`/dashboard/services`);
        revalidatePath(`/dashboard/services/${currentService.slug}`);
        revalidatePath(`/services`);
        revalidatePath(`/services/${currentService.slug}`);
    } catch (error: any) {
        return { success: false, error: error.message || "Failed | Delete Service" };
    }
}