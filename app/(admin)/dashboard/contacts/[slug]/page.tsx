import dbConnect from "@/lib/mongoose"
import Contacts from "@/models/contacts";
import DashboardContactForm from "@/components/dashboard/contact-form"

type ContactForm = {
    params: Promise<{
        slug: string
    }>
}

export default async function DashboardSingleContact({ params }: ContactForm) {

    const { slug } = await params;
    await dbConnect()

    const contact = await Contacts.findOne({ slug }).lean()

    if (!contact) {
        return null
    }

    return (
        <DashboardContactForm id={contact._id.toString()} name={contact.name} email={contact.email} message={contact.message} subject={contact.subject} />
    )
}
