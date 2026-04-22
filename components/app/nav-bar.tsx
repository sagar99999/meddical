import { Search } from "lucide-react"

export default function NavBar() {
    return (
        <div className="p-5 bg-brand-1">
            <div className="max-w-340 mx-auto flex gap-6 items-center  tracking-wider text-white">
                <ul className="flex gap-6 mr-auto">
                    <li><a className="hover:text-[#e0e0e0]" href="">Home</a></li>
                    <li><a className="hover:text-[#e0e0e0]" href="/about">About Us</a></li>
                    <li><a className="hover:text-[#e0e0e0]" href="/services">Services</a></li>
                    <li><a className="hover:text-[#e0e0e0]" href="/doctors">Doctors</a></li>
                    <li><a className="hover:text-[#e0e0e0]" href="/news">News</a></li>
                    <li><a className="hover:text-[#e0e0e0]" href="/contact">Contact</a></li>
                </ul>
                <div className="flex gap-6 items-center">
                    <button className="cursor-pointer hover:text-[#e0e0e0]">
                        <Search className="size-6" />
                    </button>
                    <button className="bg-brand-2 tracking-wide cursor-pointer font-normal px-10 py-2 rounded-3xl text-black">Appointment</button>
                </div>
            </div>
        </div>
    )
}
