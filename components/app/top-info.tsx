import Image from "next/image"
import { PhoneCall, Clock4, MapPin } from 'lucide-react';
import Link from "next/link";

export default function TopInfo() {
    return (
        <div className="bg-white p-5">
            <div className="max-w-340 mx-auto">
                <div className="flex gap-10">
                    <div className="flex items-center mr-auto">
                        <Link href="/">
                            <Image src="/images/logo.png" alt="meddical logo" width={180} height={80} />
                        </Link>
                    </div>
                    <div className="flex gap-3 items-center">
                        <PhoneCall className="size-7" />
                        <div>
                            <p className="uppercase">
                                Emergency</p>
                            <p className="text-brand">(+977) 98-123-131-09</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Clock4 className="size-7" />
                        <div>
                            <p className="uppercase">
                                Work Hour</p>
                            <p className="text-brand">09:00 - 20:00 Everyday</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <MapPin className="size-7" />
                        <div>
                            <p className="uppercase">
                                Location</p>
                            <p className="text-brand">Kathmandu, Nepal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
