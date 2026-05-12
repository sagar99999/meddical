"use client"

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { deleteContact } from "@/actions/contacts"

type DashboardContactFormProps = {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function DashboardContactForm({ id, name, email, subject, message }: DashboardContactFormProps) {


    const router = useRouter()

    return (
        <div>
            <p className="mb-2">Name:</p>
            <p className="py-3 ps-4 border-2 rounded-md mb-4">{name}</p>
            <p className="mb-2">Email:</p>
            <p className="py-3 ps-4 border-2 rounded-md mb-4">{email}</p>
            <p className="mb-2">Subject:</p>
            <p className="py-3 ps-4 border-2 rounded-md mb-4">{subject}</p>
            <p className="mb-2">Message:</p>
            <p className="py-3 ps-4 border-2 rounded-md mb-6">{message}</p>
            <button onClick={async () => {
                try {
                    const res = await deleteContact(id)

                    if (res.success) {
                        toast.success("✅ Contact successfully deleted")
                        router.replace("/dashboard/contacts")
                        return
                    }
                    toast.error("❌ Contact deletion failed")
                } catch (error: any) {
                    toast.error("❌ Contact deletion failed")
                }
            }} className="bg-red-700 cursor-pointer text-sm rounded-sm block ml-auto text-white p-4 py-2 mb-4">Delete</button>
        </div>
    )
}