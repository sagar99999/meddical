"use server"
import dbConnect from "@/lib/mongoose"
import Doctors from "@/models/doctors"
import { revalidatePath } from "next/cache";
import { imagekit } from "@/lib/image-kit";
import { formSchema } from "@/components/dashboard/doctor-form"
import * as z from "zod"
import { generateSlug } from "@/lib/utils";

//server action | getDoctors
export async function getDoctorsName() {
    try {
        await dbConnect()

        const docs = await Doctors.find().lean()

        const filteredDocs = docs.map(doc => ({
            name: doc.name
        }))

        return { success: true, error: false, data: filteredDocs };
    } catch (error: any) {
        return { success: false, error: error.message || "Failed | Get Doctor" };
    }
}

// server action | CREATE doctor profile
export async function createDoctor(payload: z.infer<typeof formSchema>, formData?: FormData | null) {

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

        // 2.✅ Generate new slug based on name
        const newSlug = generateSlug(payload.name)

        // 3.✅ Perform creattion
        await Doctors.create({
            ...payload,
            slug: newSlug, // fallback if needed
            image: uploadResponse?.url || "",
            fileId: uploadResponse?.fileId || "",
        });

        // 4.✅ Revoke cached paths
        revalidatePath(`/dashboard/doctors`);
        revalidatePath(`/doctors`);
        revalidatePath(`/`);
        revalidatePath(`/about`);
        return { success: true, error: false };
    } catch (error: any) {
        return { success: false, error: error.message || "Failed | Create Doctor" };
    }
}

// server action | UPDATE doctor profile
export async function updateDoctorById(id: string, payload: z.infer<typeof formSchema>, formData?: FormData | null) {

    try {
        await dbConnect()
        let uploadResponse;
        let newSlug;

        // 1. ✅ Fetch if the doctor existss
        const currentDoctor = await Doctors.findById(id).lean();
        if (!currentDoctor) {
            return { success: false, error: "Doctor not found" };
        }

        // 2.✅ check for the image
        if (formData) {
            const imageFile = formData.get("image") as File;
            const arrayBuffer = await imageFile.arrayBuffer()
            const imgBuffer = Buffer.from(arrayBuffer);

            // ❌ Delete image on Imagekit
            if (currentDoctor.fileId) {
                await imagekit.deleteFile(currentDoctor.fileId)
            }

            //✅ Upload image to ImageKit
            uploadResponse = await imagekit.upload({
                file: imgBuffer,
                fileName: `img-${Date.now()}-${Math.floor(Math.random() * 99999)}`,
                folder: "/meddical",
            });
        }

        // 4.✅ Generate new slug based on name
        if (payload.name !== currentDoctor.name) {
            newSlug = generateSlug(payload.name)
        }

        // 5.✅ Perform update
        await Doctors.findByIdAndUpdate(
            id,
            {
                $set: {
                    ...payload,
                    slug: newSlug || currentDoctor.slug,
                    image: uploadResponse?.url || currentDoctor.image,
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
        revalidatePath(`/dashboard/doctors`);
        revalidatePath(`/dashboard/doctors/${payload.slug}`);
        revalidatePath(`/doctors`);
        revalidatePath(`/doctors/${payload.slug}`);
        revalidatePath(`/`);
        revalidatePath(`/about`);
        return { success: true, error: false };
    } catch (error: any) {
        return { success: false, error: error.message || "Failed | Update Doctor" };
    }
}

// server action | DELETE doctor profile
export async function deleteDoctorById(id: string) {
    try {
        await dbConnect()

        // 1. ✅ Fetch if the doctor existss
        const currentDoctor = await Doctors.findById(id).lean();
        if (!currentDoctor) {
            return { success: false, error: "Doctor not found" };
        }

        // 2.❌ Delete image on Imagekit
        if (currentDoctor.fileId) {
            await imagekit.deleteFile(currentDoctor.fileId)
        }

        // 3. ❌ DELETE doctor profile
        await Doctors.findByIdAndDelete(id)

        // 4. Revoke cached paths
        revalidatePath(`/dashboard/doctors`);
        revalidatePath(`/dashboard/doctors/${currentDoctor.slug}`);
        revalidatePath(`/doctors`);
        revalidatePath(`/doctors/${currentDoctor.slug}`);
        revalidatePath(`/`);
        revalidatePath(`/about`);
    } catch (error: any) {
        return { success: false, error: error.message || "Failed | Delete Doctor" };
    }
}