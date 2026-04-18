import Image from "next/image"
import { PhoneCall, Clock4, MapPin } from 'lucide-react';

export default function TopInfo() {
    return (
        <div className="max-w-340 mx-auto">
            <div className="flex gap-10 p-5">
            <div className="flex items-center mr-auto">
                <Image src="/images/logo.png" alt="meddical logo" width={180} height={80} />
            </div>
            <div className="flex gap-3 items-center">
                <PhoneCall className="size-7" />
                <div>
                    <h2 className="uppercase">
                        Emergency</h2>
                    <p className="text-brand font-semibold">(+977) 98-123-131-09</p>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <Clock4 className="size-7" />
                <div>
                    <h2 className="uppercase">
                        Work Hour</h2>
                    <p className="text-brand font-semibold">09:00 - 20:00 Everyday</p>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <MapPin className="size-7" />
                <div>
                    <h2 className="uppercase">
                        Location</h2>
                    <p className="text-brand font-semibold">Kathmandu, Nepal</p>
                </div>
            </div>
        </div>
        </div>
    )
}
