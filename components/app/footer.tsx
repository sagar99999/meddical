import Image from "next/image"
import { Link, Send } from "lucide-react"
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "../icons/social"

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
                            <li className="mb-3 hover:text-[#e0e0e0]"><a href="">Appointment</a></li>
                            <li className="mb-3 hover:text-[#e0e0e0]"><a href="">Doctors</a></li>
                            <li className="mb-3 hover:text-[#e0e0e0]"><a href="">Services</a></li>
                            <li className="hover:text-[#e0e0e0]"><a href="">About Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold mb-6 tracking-wider text-lg">Contact Us</p>
                        <ul>
                            <li className="mb-3 hover:text-[#e0e0e0]"><a href="">Call: (+977) 98-123-131-09</a></li>
                            <li className="mb-3 hover:text-[#e0e0e0]"><a href="">Email: support@meddical.com</a></li>
                            <li className="hover:text-[#e0e0e0]"><a href="">Address: Kathmandu, Nepal</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold mb-6 tracking-wider text-lg">Newsletter</p>
                        <div className="relative text-black">
                            <input className="ps-5 pe-10 py-3 bg-brand-2 rounded-sm" type="email" placeholder='Enter your email address' />
                            <Send className="size-5 absolute right-4 top-3.5" />
                        </div>
                    </div>
                </div>

                <div className="flex gap-6 items-center mt-15 border-t border-white">
                    <p className="mr-auto tracking-wider mt-15">
                        © 2021 Meddical All Rights Reserved by PNTEC-LTD
                    </p>
                    <ul className="flex gap-6">
                        <li><a href="">
                            <LinkedInIcon />
                        </a></li>
                        <li><a href="">
                            <FacebookIcon />
                        </a></li>
                        <li><a href="">
                            <InstagramIcon />
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
