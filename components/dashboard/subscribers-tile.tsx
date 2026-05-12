import { Mail } from "lucide-react"
import SubscriberDeleteBtn from "@/components/dashboard/subscriber-delete-btn"

type SubscribersTileProps = {
    email: string
}

export default function SubscribersTile({ email }: SubscribersTileProps) {
    return (
        <div className="bg-[#f9f9f9] rounded-md overflow-hidden text-sm tracking-tight">
            <div className="flex gap-2">
                <div className="p-2 py-4 flex justify-between w-full">
                    <div className="flex mb-1 gap-2 items-center">
                        <Mail className="size-4" />
                        <p className="line-clamp-1  text-brand-1 font-medium mb-1">{email}</p>
                    </div>
                    <SubscriberDeleteBtn email={email} />
                </div>
            </div>
        </div>
    )
}