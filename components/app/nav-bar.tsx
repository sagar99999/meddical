import { Search } from "lucide-react"
import Link from "next/link"

export default function NavBar() {
    return (
        <div className="p-5 bg-brand-1">
            <div className="max-w-340 mx-auto flex gap-6 items-center  tracking-wider text-white">
                <ul className="flex gap-6 mr-auto">
                    <li><Link className="hover:text-[#e0e0e0]" href="/">Home</Link></li>
                    <li><Link className="hover:text-[#e0e0e0]" href="/about">About Us</Link></li>
                    <li><Link className="hover:text-[#e0e0e0]" href="/services">Services</Link></li>
                    <li><Link className="hover:text-[#e0e0e0]" href="/doctors">Doctors</Link></li>
                    <li><Link className="hover:text-[#e0e0e0]" href="/news">News</Link></li>
                    <li><Link className="hover:text-[#e0e0e0]" href="/contact">Contact</Link></li>
                </ul>
                <div className="flex gap-6 items-center">
                    <Link href="/news" className="cursor-pointer hover:text-[#e0e0e0]">
                        <Search className="size-6" />
                    </Link>
                    <Link href="/appointment" className="bg-brand-2 tracking-wide cursor-pointer font-normal px-10 py-2 rounded-3xl text-black">Appointment</Link>
                </div>
            </div>
        </div>
    )
}
