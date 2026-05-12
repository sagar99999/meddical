import { User, Tag, Mail, Clock } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"

type ContactsTileProps = {
    name: string;
    email: string;
    slug: string;
    subject: string;
    createdAt: Date
}

export default function ContactsTile({ name, email, slug, subject, createdAt }: ContactsTileProps) {
    return (
        <Link href={`/dashboard/contacts/${slug}`}>
            <div className="bg-[#f9f9f9] rounded-md overflow-hidden text-sm tracking-tight">
                <div className="flex gap-2">
                    <div className="p-2">
                        <div className="flex mb-1 gap-2">
                            <User className="size-4" />
                            <p className="line-clamp-1 capitalize text-brand-1 font-medium mb-1">{name}</p>
                        </div>
                        <div className="flex mb-1 gap-2 items-center">
                            <Mail className="size-4" />
                            <p className="line-clamp-1  text-brand-1 font-medium mb-1">{email}</p>
                        </div>
                        <div className="flex mb-1 gap-2 items-center">
                            <Clock className="size-4" />
                            <p className="line-clamp-1  text-brand-1 font-medium mb-1">{format(createdAt, "dd/MM/yyyy")}</p>
                        </div>

                        <div className="flex gap-2">
                            <Tag className="size-4 text-yellow-600" />
                            <p className="capitalize">{subject}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}