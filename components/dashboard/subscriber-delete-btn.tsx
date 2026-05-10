"use client"
import { Trash2 } from "lucide-react"
import { deleteSubscriber } from "@/actions/subscribers"
import { toast } from "sonner"

export default function SubscriberDeleteBtn({ email }: { email: string }) {
    return (
        <button onClick={async () => {
            try {
                const res = await deleteSubscriber(email)
                if (!res.error) {
                    toast.success("✅ Subscriber deleted successfully")
                    return
                }
                toast.success("❌ Subscriber deletion failed")
            } catch (error: any) {
                toast.success("❌ Subscriber deletion failed")
            }
        }} className="cursor-pointer ml-3" aria-label={`Delete subscriber ${email}`}>
            <Trash2 className="size-4" />
        </button>
    )
}
