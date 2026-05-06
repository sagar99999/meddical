"use server"
import dbConnect from "@/lib/mongoose"
import { revalidatePath } from "next/cache";
import Appointments from "@/models/appointments";
import { type AppointmentFormSchemaData } from "@/components/app/form-1"
import App from "next/app";

//server action | create appointment
export async function createAppointment(payload: AppointmentFormSchemaData) {
    try {
        await dbConnect()

        await Appointments.create(payload)

        return { success: true, error: false };
    } catch (error: any) {
        return { success: false, error: error.message || "Failed | Get Doctor" };
    }
}