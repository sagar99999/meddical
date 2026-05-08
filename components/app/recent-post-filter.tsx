import Image from "next/image"
import { Search } from "lucide-react"

export default function RecentPostFilter() {
  return (
    <div className="basis-100 shrink-0">
      <div className="relative mb-6">
        <input className="bg-brand-1 placeholder:text-white font-light p-4 pr-10 tracking-wider rounded-sm text-white w-full" type="search" placeholder="Search" />
        <Search className="size-6 text-white top-3.5 right-3 absolute" />
      </div>
      <div className="p-5 border rounded-sm mb-6">
        <h2 className="text-brand-1 text-4xl font-semibold mb-10 tracking-wide">Recent Posts</h2>
        <ul className="grid gap-6 grid-cols-1">
          <li>
            <div className="flex gap-3 group cursor-pointer">
              <div className="relative basis-20 shrink-0">
                <Image src="/images/image-1.jpg" alt="doctor image" fill sizes="80px" className="object-cover object-center rounded-sm" />
              </div>
              <div>
                <p className="text-brand mb-2 text-sm tracking-wide line-clamp">Monday 05, Semptember 2021</p>
                <p className="tracking-wide line-clamp-2 group-hover:underline">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illo accusamusx.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-3 group cursor-pointer">
              <div className="relative basis-20 shrink-0">
                <Image src="/images/image-1.jpg" alt="doctor image" fill sizes="80px" className="object-cover object-center rounded-sm" />
              </div>
              <div>
                <p className="text-brand mb-2 text-sm tracking-wide line-clamp">Monday 05, Semptember 2021</p>
                <p className="tracking-wide line-clamp-2 group-hover:underline">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illo accusamusx.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-3 group cursor-pointer">
              <div className="relative basis-20 shrink-0">
                <Image src="/images/image-1.jpg" alt="doctor image" fill sizes="80px" className="object-cover object-center rounded-sm" />
              </div>
              <div>
                <p className="text-brand mb-2 text-sm tracking-wide line-clamp">Monday 05, Semptember 2021</p>
                <p className="tracking-wide line-clamp-2 group-hover:underline">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illo accusamusx.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-3 group cursor-pointer">
              <div className="relative basis-20 shrink-0">
                <Image src="/images/image-1.jpg" alt="doctor image" fill sizes="80px" className="object-cover object-center rounded-sm" />
              </div>
              <div>
                <p className="text-brand mb-2 text-sm tracking-wide line-clamp">Monday 05, Semptember 2021</p>
                <p className="tracking-wide line-clamp-2 group-hover:underline">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illo accusamusx.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="p-5 border rounded-sm">
        <h2 className="text-brand-1 text-4xl font-semibold mb-10 tracking-wide">Categories</h2>
        <ul className="grid gap-6 grid-cols-1">
          <li className="text-lg hover:underline cursor-pointer pl-6 tracking-wide relative">
            Surgery
            <span className="absolute right-7 text-sm bg-brand text-white p-1 px-2.5 font-semibold rounded-full">3</span>
          </li>
          <li className="text-lg hover:underline cursor-pointer pl-6 tracking-wide relative">
            Health Care
            <span className="absolute right-7 text-sm bg-brand text-white p-1 px-2.5 font-semibold rounded-full">5</span>
          </li>
          <li className="text-lg hover:underline cursor-pointer pl-6 tracking-wide relative">
            Medical
            <span className="absolute right-7 text-sm bg-brand text-white p-1 px-2.5 font-semibold rounded-full">8</span>
          </li>
          <li className="text-lg hover:underline cursor-pointer pl-6 tracking-wide relative">
            Professional
            <span className="absolute right-7 text-sm bg-brand text-white p-1 px-2.5 font-semibold rounded-full">10</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
