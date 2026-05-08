"use server"

import dbConnect from "@/lib/mongoose"
import Contacts from "@/models/contacts";
import { type ContactFormSchemaType } from "@/components/app/contact-form"
import { generateSlug } from "@/lib/utils";
import { revalidatePath } from "next/cache";

// CREATE Contact
export default async function createContacts(payload: ContactFormSchemaType) {
    try {
        await dbConnect()

        // 2.✅ Generate new slug based on name
        const slug = generateSlug(payload.name)

        await Contacts.create({
            ...payload,
            slug
        })

        revalidatePath("/dashboard/contacts")
        return { success: true, error: false };
    } catch (error: any) {
        return { success: false, error: error.message || "Failed | Create Contact" };
    }
}