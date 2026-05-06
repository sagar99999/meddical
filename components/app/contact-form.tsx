"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import createContacts from "@/actions/contacts"
import { toast } from "sonner"

const ContactFormSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.email('Invalid email address'),
    subject: z.string().min(3, 'Subject must be at least 3 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormSchemaType = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {


    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormSchemaType>({
        resolver: zodResolver(ContactFormSchema as any)
    })

    const submitHandler = async (data: ContactFormSchemaType) => {
        try {
            await createContacts(data)
            toast.success("✅ Submission successfull", {
                description: "You'll be contacted shortly"
            })
            reset()
        } catch (error: any) {
            toast.error("❌ Error Occured please try again later")
        }
    }

    return (
        <div className='basis-150'>
            <p className='uppercase text-brand text-lg font-bold tracking-widest mb-2'>Get in touch</p>
            <h2 className='text-4xl font-semibold mb-9 tracking-wider'>Contact</h2>
            <form onSubmit={handleSubmit(submitHandler)} className='bg-brand-1 rounded-sm overflow-hidden text-white'>
                <div className='flex'>
                    <div className="grow">
                        <input {...register("name")} className='font-light p-4 w-full border-white border-r placeholder:text-white tracking-wider' type="text" placeholder='Name' />
                        {errors.name && (
                            <p className="text-red-400 text-sm px-4 py-1">{errors.name.message}</p>
                        )}
                    </div>
                    <div className="grow">
                        <input {...register("email")} className='font-light p-4 w-full placeholder:text-white tracking-wider' type="email" placeholder='Email' />
                        {errors.email && (
                            <p className="text-red-400 text-sm px-4 py-1">{errors.email.message}</p>
                        )}
                    </div>
                </div>
                <input {...register("subject")} className='font-light p-4 block border-white border-t w-full placeholder:text-white tracking-wider' type="text" placeholder='Subject' />
                {errors.subject && (
                    <p className="text-red-400 text-sm px-4 py-1">{errors.subject.message}</p>
                )}
                <textarea {...register("message")} placeholder='Message...' className='resize-none p-4 h-60 w-full border-white border-t placeholder:text-white tracking-wider' />
                {errors.message && (
                    <p className="text-red-400 text-sm px-4 py-1">{errors.message.message}</p>
                )}
                <button disabled={isSubmitting} className='p-3 border-none outline-0 py-4 cursor-pointer disabled:bg-[#97a9ce] bg-brand-2 text-black  w-full placeholder:text-white tracking-wider' type="submit">SUBMIT</button>
            </form>
        </div>
    )
}
