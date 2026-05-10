"use server"

import dbConnect from "@/lib/mongoose"
import Subscribers from "@/models/subscribers";
import { revalidatePath } from "next/cache";

// CREATE Subscriber for newsletter
export async function createSubscriber(email: string) {
    try {
        await dbConnect()

        const existingSubscriber = await Subscribers.findOne({ email })

        if (existingSubscriber) {
            return { success: true, error: false, msg: "You're already subsribed" };
        }

        await Subscribers.create({ email })
        revalidatePath("/dashboard/subscribers")
        return { success: true, error: false };
    } catch (error: any) {
        return { success: false, error: error.message || "Failed | Create Subscriber" };
    }
}