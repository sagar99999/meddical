import dbConnect from "@/lib/mongoose";
import Doctors from "@/models/doctors";
import Image from "next/image";
import { FacebookIcon, LinkedInIcon, InstagramIcon } from "@/components/icons/social"
import Link from "next/link";
import { Image as ImageIcon } from "lucide-react"

type DoctorPageProps = {
    params: Promise<{
        slug: string;
    }>
}

export default async function DoctorPage({ params }: DoctorPageProps) {

    const { slug } = await params;
    await dbConnect()

    const doc = await Doctors.findOne({ slug }).lean()

    return (
        <div className='max-w-240 mx-auto'>
            <div className="p-5">
                {
                    doc ? <div>
                        <Image src={doc.image} alt={doc.name} className="rounded-sm shadow-lg mb-6" style={{ height: "auto", width: "100%" }} height={800} width={800} />
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-5xl text-brand-1 mr-3 capitalize">{doc.name}</h2>
                            <p className=" capitalize bg-green-700 text-white py-1 px-4 rounded-2xl shadow-lg">{doc.department}</p>
                        </div>
                        <p className="text-lg mb-6">{doc.description}</p>
                        <div className="flex justify-center gap-7 text-brand-1">
                            <Link href={doc.socialLinks.facebook}>
                                <FacebookIcon size="size-6" />
                            </Link>
                            <Link href={doc.socialLinks.linkedin}>
                                <LinkedInIcon size="size-6" />
                            </Link>
                            <Link href={doc.socialLinks.instagram}>
                                <InstagramIcon size="size-6" />
                            </Link>
                        </div>
                    </div> : <div className="flex p-5 py-15 flex-col items-center">
                        <ImageIcon className="size-20 mb-3text-brand-1" />
                        <p className="text-2xl tracking-tighter mb-1 text-brand-1">Doctor Profile Not Found</p>
                        <p className="tracking-tighter text-brand-1 ">Reload, or adjust your filter</p>
                    </div>
                }
            </div>
        </div>
    )
}
