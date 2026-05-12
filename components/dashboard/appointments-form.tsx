"use client"
import { deleteAppointment } from "@/actions/appointment"
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type DashboardAppointmentsFormProps = {
    name: string;
    gender: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    doctor: string;
    department: string;
    message: string;
}

export default function DashboardAppointmentsForm({ name, gender, email, phone, date, time, doctor, department, message }: DashboardAppointmentsFormProps) {

    const router = useRouter()

    return (
        <div>
            <p className="mb-2">Name:</p>
            <p className="py-3 ps-4 border-2 rounded-md mb-4">{name}</p>
            <p className="mb-2">Gender:</p>
            <p className="py-3 ps-4 border-2 rounded-md mb-4">{gender}</p>
            <p className="mb-2">Email:</p>
            <p className="py-3 ps-4 border-2 rounded-md mb-4">{email}</p>
            <p className="mb-2">Phone:</p>
            <p className="py-3 ps-4 border-2 rounded-md mb-4">{phone}</p>
            <p className="mb-2">Date:</p>
            <p className="py-3 ps-4 border-2 rounded-md mb-4">{date}</p>
            <p className="mb-2">Time:</p>
            <p className="py-3 ps-4 border-2 rounded-md mb-4">{time}</p>
            <p className="mb-2">Doctor:</p>
            <p className="py-3 ps-4 border-2 rounded-md mb-4">{doctor}</p>
            <p className="mb-2">Department:</p>
            <p className="py-3 ps-4 border-2 rounded-md mb-4">{department}</p>
            <p className="mb-2">Message:</p>
            <p className="py-3 ps-4 border-2 rounded-md mb-6">{message}</p>
            <button onClick={async () => {
                try {
                    const res = await deleteAppointment(email)

                    if (res.success) {
                        toast.success("✅ Appointment successfully deleted")
                        router.replace("/dashboard/appointments")
                        return
                    }
                    toast.error("❌ Appointment deletion failed")
                } catch (error: any) {
                    toast.error("❌ Appointment deletion failed")
                }
            }} className="bg-red-700 cursor-pointer text-sm rounded-sm block ml-auto text-white p-4 py-2 mb-4">Delete</button>
        </div>
    )
}