import { User, Tag, Mail, Clock, Phone, Calendar } from "lucide-react"
import Link from "next/link"

type AppointmentsTileProps = {
    name: string;
    email: string;
    slug: string;
    phone: string;
    time: string;
    date: string;
    department: string;
}

export default function AppointmentsTile({ name, email, slug, phone, time, date, department }: AppointmentsTileProps) {
    return (
        <Link href={`/dashboard/appointments/${slug}`}>
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
                            <Phone className="size-4" />
                            <p className="line-clamp-1  text-brand-1 font-medium mb-1">{phone}</p>
                        </div>
                        <div className="flex mb-1 gap-2 items-center">
                            <Calendar className="size-4" />
                            <p className="line-clamp-1  text-brand-1 font-medium mb-1">{date}</p>
                        </div>
                        <div className="flex mb-1 gap-2 items-center">
                            <Clock className="size-4" />
                            <p className="line-clamp-1  text-brand-1 font-medium mb-1">{time}</p>
                        </div>

                        <div className="flex gap-2">
                            <Tag className="size-4 text-yellow-600" />
                            <p className="capitalize">{department}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
