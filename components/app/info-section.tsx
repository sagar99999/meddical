import React from 'react'
import { MapPin, Clock4, PhoneCall, Mail } from "lucide-react"

type InfoSectionType = {
    containerClass: string
}

export default function InfoSection({ containerClass }: InfoSectionType) {
    return (
        <div className={containerClass || ""}>
            <div className="bg-brand-2 p-10 group rounded-sm hover:bg-brand-1 hover:text-white">
                <PhoneCall className="size-10 mb-3 text-brand-1 group-hover:text-brand-2" />
                <p className="text-brand-1 tracking-wider group-hover:text-brand-2 text-lg font-bold uppercase mb-3">Emergency</p>
                <p className="mb-1.5 tracking-wider text-brand-1 group-hover:text-brand-2">(+977) 98-123-131-09</p>
                <p className="mb-1.5 tracking-wider text-brand-1 group-hover:text-brand-2">(+977) 98-123-131-09</p>
            </div>
            <div className="bg-brand-2 p-10 group rounded-sm hover:bg-brand-1 hover:text-white">
                <MapPin className="size-10 mb-3 text-brand-1 group-hover:text-brand-2" />
                <p className="text-brand-1 tracking-wider group-hover:text-brand-2 text-lg font-bold uppercase mb-3">Location</p>
                <p className="mb-1.5 tracking-wider text-brand-1 group-hover:text-brand-2">Kathmandu, Nepal</p>
                <p className="mb-1.5 tracking-wider text-brand-1 group-hover:text-brand-2">Kathmandu, Nepal</p>
            </div>
            <div className="bg-brand-2 p-10 group rounded-sm hover:bg-brand-1 hover:text-white">
                <Mail className="size-10 mb-3 text-brand-1 group-hover:text-brand-2" />
                <p className="text-brand-1 tracking-wider group-hover:text-brand-2 text-lg font-bold uppercase mb-3">Email</p>
                <p className="mb-1.5 tracking-wider text-brand-1 group-hover:text-brand-2">support@meddical.com</p>
                <p className="mb-1.5 tracking-wider text-brand-1 group-hover:text-brand-2">support@meddical.com</p>
            </div>
            <div className="bg-brand-2 p-10 group rounded-sm hover:bg-brand-1 hover:text-white">
                <Clock4 className="size-10 mb-3 text-brand-1 group-hover:text-brand-2" />
                <p className="text-brand-1 tracking-wider group-hover:text-brand-2 text-lg font-bold uppercase mb-3">Working Hours</p>
                <p className="mb-1.5 tracking-wider text-brand-1 group-hover:text-brand-2">Mon-Sat 09:00 - 20:00</p>
                <p className="mb-1.5 tracking-wider text-brand-1 group-hover:text-brand-2">Sunday Emergency only</p>
            </div>
        </div>
    )
}
