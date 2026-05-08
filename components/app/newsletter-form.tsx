import { Send } from "lucide-react"

export default function NewsletterForm() {

    return (
        <div className="relative text-black">
            <form action="">
                <input className="ps-5 pe-10 py-3 bg-brand-2 rounded-sm" type="email" placeholder='Enter your email address' />
                <Send className="size-5 absolute right-4 top-3.5" />
            </form>
        </div>
    )
}
