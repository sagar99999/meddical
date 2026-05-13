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
        revalidatePath("/appointments")
        return { success: true, error: false };
    } catch (error: any) {
        return { success: false, error: error.message || "Failed | Create Appointment" };
    }
}

//server action | delete appointment
export async function deleteAppointment(email: string) {
    try {
        if (!email || typeof email !== 'string' || !email.includes('@')) {
            return { success: false, error: "Invalid email address" };
        }

        await dbConnect()

        const existingAppointment = await Appointments.findOne({ email })

        if (!existingAppointment) {
            return { success: false, error: true };
        }

        await Appointments.findOneAndDelete({ email })
        revalidatePath("/dashboard/appointments")
        revalidatePath("/appointments")
        return { success: true, error: false };
    } catch (error: any) {
        return { success: false, error: error.message || "Failed | Delete Appointment" };
    }
}