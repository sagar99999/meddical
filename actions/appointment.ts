"use server"
import dbConnect from "@/lib/mongoose"
import { revalidatePath } from "next/cache";
import Appointments from "@/models/appointments";
import { type AppointmentFormSchemaData } from "@/components/app/form-1"
import { generateSlug } from "@/lib/utils";

//server action | create appointment
export async function createAppointment(payload: AppointmentFormSchemaData) {
    try {
        await dbConnect()

        // 2.✅ Generate new slug based on name
        const slug = generateSlug(payload.name)

        await Appointments.create({
            ...payload,
            slug
        })

        revalidatePath("/dashboard/appointments")
        return { success: true, error: false };
    } catch (error: any) {
        return { success: false, error: error.message || "Failed | Create Appointment" };
    }
}