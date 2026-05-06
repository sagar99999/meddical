"use server"

import dbConnect from "@/lib/mongoose"
import Contacts from "@/models/contacts";
import { type ContactFormSchemaType } from "@/components/app/contact-form"

// CREATE Contact
export default async function createContacts(payload: ContactFormSchemaType) {
    try {
        await dbConnect()
        await Contacts.create(payload)
        return { success: false, error: false };
    } catch (error: any) {
        return { success: false, error: error.message || "Failed | Create Contact" };
    }
}