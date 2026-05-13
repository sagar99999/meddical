import Image from "next/image"
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "../icons/social"
import Link from "next/link"
import NewsletterForm from "./newsletter-form"

export default function Footer() {
    return (
        <div className="p-5 py-20 bg-brand-1 text-white">

            <div className="max-w-340 mx-auto">

                <div className='flex justify-between gap-6'>
                    <div className="basis-62">
                        <Image src="/images/logo-1.png" alt="meddical logo" width={180} height={80} />
                        <p className="text-lg mt-6 tracking-wider leading-8">Leading the Way in Medical Excellence, Trusted Care.</p>
                    </div>
                    <div>
                        <p className="font-semibold mb-6 tracking-wider text-lg">Important Links</p>
                        <ul>
                            <li className="mb-3 hover:text-[#e0e0e0]"><Link href="/appointment">Appointment</Link></li>
                            <li className="mb-3 hover:text-[#e0e0e0]"><Link href="/doctors">Doctors</Link></li>
                            <li className="mb-3 hover:text-[#e0e0e0]"><Link href="/services">Services</Link></li>
                            <li className="hover:text-[#e0e0e0]"><Link href="/about">About Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold mb-6 tracking-wider text-lg">Contact Us</p>
                        <ul>
                            <li className="mb-3 hover:text-[#e0e0e0]">Call: (+977) 98-123-131-09</li>
                            <li className="mb-3 hover:text-[#e0e0e0]">Email: support@meddical.com</li>
                            <li className="hover:text-[#e0e0e0]">Address: Kathmandu, Nepal</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold mb-6 tracking-wider text-lg">Newsletter</p>
                        <NewsletterForm />
                    </div>
                </div>

                <div className="flex gap-6 items-center mt-15 border-t border-white">
                    <p className="mr-auto tracking-wider mt-15">
                        © 2021 Meddical All Rights Reserved by PNTEC-LTD
                    </p>
                    <ul className="flex gap-6">
                        <li><Link href="#">
                            <LinkedInIcon />
                        </Link></li>
                        <li><Link href="#">
                            <FacebookIcon />
                        </Link></li>
                        <li><Link href="#">
                            <InstagramIcon />
                        </Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}