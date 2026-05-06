"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState, useEffect } from "react"
import { getDoctorsName } from "@/actions/doctor"
import { toast } from "sonner"
import { createAppointment } from "@/actions/appointment"

const appointmentFormSchema = z.object({
    name: z.string().min(2, "Name is required").max(100),
    gender: z.enum(["male", "female", "other"], {
        error: "Select valid gender"
    }),
    email: z.email({
        error: "Enter valid email address"
    }),
    phone: z.string().min(10, "Phone number is required").regex(/^[\+\d\s\-\(\)]+$/, "Invalid phone number format"),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
    time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Time must be in HH:MM format (AM/PM)"),
    doctor: z.string().nonempty("Please select a doctor"),
    department: z.enum(["Free Checkup", "Cardiogram", "Dna Test", "Blood Bank", "Dermalogy", "Orthopedic"], {
        error: "Select valid department"
    }),
    message: z.string().min(10, "Message should be at least 10 characters"),
})

export type AppointmentFormSchemaData = z.infer<typeof appointmentFormSchema>;

export default function Form1() {

    const [doctors, setDoctors] = useState<{ name: string }[]>([])

    const { handleSubmit, register, reset, formState: { errors, isSubmitting } } = useForm<AppointmentFormSchemaData>({
        resolver: zodResolver(appointmentFormSchema as any),
    })

    const submitHandler = async (data: AppointmentFormSchemaData) => {
        try {
            await createAppointment(data)
            reset()
            toast.success("✅ Success making appointment")
        } catch (error: any) {
            toast.error("❌ Error making appointment")
        }
    }

    useEffect(() => {
        (async () => {
            try {
                // fetch available docs form db
                const res = await getDoctorsName()

                if (!res.success) {
                    toast.error("Error occured while fetching doctors")
                }
                setDoctors(res.data!)
            } catch (error) {
                toast.error("Error occured while fetching doctors")
            }
        })()
    }, [])

    return (
        <form onSubmit={handleSubmit(submitHandler)} className='bg-brand-1 rounded-sm overflow-hidden text-white'>
            <div className='flex'>
                <div className="basis-[50%]">
                    <input {...register("name")} className='w-full font-light p-4 border-white border-r placeholder:text-white tracking-wider' type="text" placeholder='Name' />
                    {errors.name && (
                        <p className="text-red-400 text-sm px-4 py-1">{errors.name.message}</p>
                    )}
                </div>
                <div className="basis-[50%]">
                    <select {...register("gender")} className="w-full font-light p-4 border-white placeholder:text-white tracking-wider">
                        <option>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.gender && (
                        <p className="text-red-400 text-sm px-4 py-1">{errors.gender.message}</p>
                    )}
                </div>
            </div>
            <div className="flex">
                <div className="basis-[50%]">
                    <input {...register("email")} className='w-full border-t border-r font-light p-4 placeholder:text-white tracking-wider' type="email" placeholder='Email' />
                    {errors.email && (
                        <p className="text-red-400 text-sm px-4 py-1">{errors.email.message}</p>
                    )}
                </div>
                <div className="basis-[50%]">
                    <input {...register("phone")} className='w-full border-t font-light p-4 placeholder:text-white tracking-wider' type="text" placeholder='Phone' />
                    {errors.phone && (
                        <p className="text-red-400 text-sm px-4 py-1">{errors.phone.message}</p>
                    )}
                </div>
            </div>
            <div className="flex">
                <div className="basis-[50%]">
                    <input {...register("date")} className='w-full border-t font-light p-4 border-white border-r placeholder:text-white tracking-wider' type="date" placeholder='Date' />
                    {errors.date && (
                        <p className="text-red-400 text-sm px-4 py-1">{errors.date.message}</p>
                    )}
                </div>
                <div className="basis-[50%]">
                    <input {...register("time")} className='w-full font-light p-4 border-white border-t placeholder:text-white tracking-wider' type="time" step={"60"} placeholder='Time' />
                    {errors.time && (
                        <p className="text-red-400 text-sm px-4 py-1">{errors.time.message}</p>
                    )}
                </div>
            </div>
            <div className="flex">
                <div className="basis-[50%]">
                    <select {...register("doctor")} className="w-full border-t font-light p-4 border-white border-r placeholder:text-white tracking-wider">
                        <option value="">Select Doctor</option>
                        {
                            doctors.length && doctors.map(doc => (<option key={doc.name} value={doc.name} className="text-capitalize">{doc.name}</option>))
                        }
                    </select>
                    {errors.doctor && (
                        <p className="text-red-400 text-sm px-4 py-1">{errors.doctor.message}</p>
                    )}
                </div>
                <div className="basis-[50%]">
                    <select {...register("department")} className="w-full font-light p-4 border-white border-t placeholder:text-white tracking-wider">
                        <option>Depatment</option>
                        <option value="Free Checkup">Free Checkup</option>
                        <option value="Cardiogram">Cardiogram</option>
                        <option value="Dna Test">Dna Test</option>
                        <option value="Blood Bank">Blood Bank</option>
                        <option value="Dermalogy">Dermalogy</option>
                        <option value="Orthopedic">Orthopedic</option>
                    </select>
                    {errors.department && (
                        <p className="text-red-400 text-sm px-4 py-1">{errors.department.message}</p>
                    )}
                </div>
            </div>
            <textarea {...register("message")} placeholder='Message...' className='resize-none p-4 h-60 w-full border-white border-t placeholder:text-white tracking-wider' />
            {errors.message && (
                <p className="text-red-400 text-sm px-4 py-1">{errors.message.message}</p>
            )}
            <button disabled={isSubmitting} className='p-3 border-none outline-0 py-4 cursor-pointer text-black bg-brand-2 w-full placeholder:text-white tracking-wider' type="submit">SUBMIT</button>
        </form>
    )
}