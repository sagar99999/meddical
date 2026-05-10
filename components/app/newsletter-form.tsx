"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Send } from "lucide-react"
import { createSubscriber } from "@/actions/subscribers"
import { toast } from "sonner"

const NewsLetterFormSchema = z.object({
    email: z.email({
        error: "Pls Enter valid Email"
    })
})

type NewsLetterFormData = z.infer<typeof NewsLetterFormSchema>

export default function NewsletterForm() {

    const { register, reset, handleSubmit, formState: { isSubmitting, errors } } = useForm<NewsLetterFormData>({
        resolver: zodResolver(NewsLetterFormSchema as any)
    })

    const submitHandler = async (data: NewsLetterFormData) => {
        try {
            const res = await createSubscriber(data.email)

            if (res.msg) {
                toast.success(`✅ ${res.msg}`)
                reset()
                return
            }

            toast.success("✅ Subscribing to newsletter successful")
            reset()
        } catch (error: any) {
            toast.error("❌ Subscribing to newsletter failed")
        }
    }

    return (
        <div className="relative text-black">
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <input {...register("email")} className="ps-5 pe-10 py-3 bg-brand-2 rounded-sm" type="email" placeholder='Enter your email address' />
                    <button disabled={isSubmitting} className="cursor-pointer" type="submit">
                        <Send className="size-5 absolute right-4 top-3.5" />
                    </button>
                </div>
                {errors.email && (
                    <p className="text-red-400 text-sm px-4 py-1">{errors.email.message}</p>
                )}
            </form>
        </div >
    )
}
