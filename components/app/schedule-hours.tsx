import { Minus, PhoneCall } from 'lucide-react'
import { scheduleHours } from "@/lib/constants"

export default function ScheduleHours() {
    return (
        <div className='bg-brand-1 px-15 py-15 text-brand-2 p-5 rounded-sm'>
            <h2 className='text-5xl font-semibold mb-15 text-center tracking-wide'>Schedule Hours</h2>
            {
                scheduleHours?.map(schedule => (
                    <div key={schedule.day} className={`text-lg text-white ${schedule.day === "sunday" ? "" : "mb-7"} relative flex`}>
                        <p className='mr-auto capitalize'>{schedule.day}</p>
                        <Minus className='size-7 absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%]' />
                        <p>
                            {
                                !schedule.closed ? `${schedule.startTime}:00AM - ${schedule.endTime}:00PM` : "Closed"
                            }
                        </p>
                    </div>
                ))
            }
            <div className="h-[.1rem] bg-brand-2 mt-15 mb-8 w-[85%] mx-auto"></div>
            <div className="flex justify-center gap-4 items-center">
                <PhoneCall className="size-11" />
                <div>
                    <p className="uppercase text-3xl text-white">
                        Emergency</p>
                    <p className='text-xl'>(+977) 98-123-131-09</p>
                </div>
            </div>
        </div>
    )
}
