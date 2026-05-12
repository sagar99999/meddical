"use server"
import dbConnect from "@/lib/mongoose"
import News from "@/models/news"
import { revalidatePath } from "next/cache";
import { imagekit } from "@/lib/image-kit";
import { formSchema } from "@/components/dashboard/news-form"
import * as z from "zod"
import { generateSlug } from "@/lib/utils";

// server action | CREATE news
export async function createNews(payload: z.infer<typeof formSchema>, formData?: FormData | null) {

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
        const newSlug = generateSlug(payload.title)

        // 3.✅ Perform creattion
        await News.create({
            ...payload,
            slug: newSlug,
            image: uploadResponse?.url || "",
            fileId: uploadResponse?.fileId || "",
        });

        // 4.✅ Revoke cached paths
        revalidatePath(`/dashboard/news`);
        return { success: true, error: false };
    } catch (error: any) {
        return { success: false, error: error.message || "Failed | Create News" };
    }
}

// server action | UPDATE news profile
export async function updateNewsById(id: string, payload: z.infer<typeof formSchema>, formData?: FormData | null) {

    try {
        await dbConnect()
        let uploadResponse;
        let newSlug;

        // 1. ✅ Fetch if the news existss
        const currentNews = await News.findById(id).lean();
        if (!currentNews) {
            return { success: false, error: "News not found" };
        }

        // 2.✅ check for the image
        if (formData) {
            const imageFile = formData.get("image") as File;
            const arrayBuffer = await imageFile.arrayBuffer()
            const imgBuffer = Buffer.from(arrayBuffer);

            // ❌ Delete image on Imagekit
            if (currentNews.fileId) {
                await imagekit.deleteFile(currentNews.fileId)
            }

            //✅ Upload image to ImageKit
            uploadResponse = await imagekit.upload({
                file: imgBuffer,
                fileName: `img-${Date.now()}-${Math.floor(Math.random() * 99999)}`,
                folder: "/meddical",
            });
        }

        // 4.✅ Generate new slug based on title
        if (payload.title !== currentNews.title) {
            newSlug = generateSlug(payload.title)
        }

        // 5.✅ Perform update
        await News.findByIdAndUpdate(
            id,
            {
                $set: {
                    ...payload,
                    slug: newSlug || currentNews.slug,
                    image: uploadResponse?.url || currentNews.image,
                    fileId: uploadResponse?.fileId || currentNews.fileId
                }            },
            {
                new: true,
                runValidators: true,
                context: "query",
            }
        )

        // 6.✅ Revoke cached paths
        revalidatePath(`/dashboard/news`);
        revalidatePath(`/dashboard/news/${payload.slug}`);
        return { success: true, error: false };
    } catch (error: any) {
        return { success: false, error: error.message || "Failed | Update News" };
    }
}

// server action | DELETE doctor profile
export async function deleteNewsById(id: string) {
    try {
        await dbConnect()

        // 1. ✅ Fetch if the doctor existss
        const currentNews = await News.findById(id).lean();
        if (!currentNews) {
            return { success: false, error: "News not found" };
        }

        // 2.❌ Delete image on Imagekit
        if (currentNews.fileId) {
            await imagekit.deleteFile(currentNews.fileId)
        }

        // 3. ❌ DELETE news profile
        await News.findByIdAndDelete(id)

        // 4. Revoke cached paths
        revalidatePath(`/dashboard/news`);
        revalidatePath(`/dashboard/news/${currentNews.slug}`);
        return { success: true, error: false };
    } catch (error: any) {
        return { success: false, error: error.message || "Failed | Delete News" };
    }
}

// server action | LIKE doctor profile
export async function LikeNewsById(id: string) {
    try {
        await dbConnect()

        // 1. ✅ Fetch if the doctor existss
        const currentNews = await News.findById(id).lean();
        if (!currentNews) {
            return { success: false, error: "News not found" };
        }

        // increment the view count
        await News.updateOne(
            { slug: currentNews.slug },
            { $inc: { likes: 1 } }
        )

        // 4. Revoke cached paths
        revalidatePath(`/dashboard/news`);
        revalidatePath(`/dashboard/news/${currentNews.slug}`);
        return { success: true, error: false };
    } catch (error: any) {
        return { success: false, error: error.message || "Failed | Like News" };
    }
}

// server action | Get total number of news pages
export async function getTotalNewsPages(currentCategory?: string) {
    try {
        await dbConnect()
        // Build filter object
        const filter: any = {};
        if (currentCategory) filter.category = currentCategory

        const totalNews = await News.countDocuments(filter.category ? filter : {})

        // 3 news per page limit
        const totalPages = Math.ceil(totalNews / 3)
        return { success: true, error: false, data: totalPages };

    } catch (error: any) {
        return { success: false, error: error.message || "Failed | Get News page number" };
    }
}

// server action | Get total number of news pages
export async function getRecentNews(currentPage: number, currentCategory?: string) {
    try {
        await dbConnect()
        const limit = 3;
        const skip = (currentPage - 1) * limit

        // Build filter object
        const filter: any = {};
        if (currentCategory) filter.category = currentCategory

        const news = await News.find(filter.category ? filter : {}).sort({ createdAt: -1 }) // newest first
            .skip(skip)
            .limit(limit)
            .lean()

        return { success: true, error: false, data: news }
    } catch (error: any) {
        return { success: false, error: error.message || "Failed | Get recent news" };
    }
}