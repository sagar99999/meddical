import ContactsTile from "@/components/dashboard/contacts-tile"
import dbConnect from "@/lib/mongoose"
import Contacts from "@/models/contacts"

export default async function DashboardServices() {
    await dbConnect()

    const contacts = await Contacts.find().sort({ createdAt: -1 }).lean()

    if (!contacts) {
        return null
    }

    return <div className="grid grid-cols-1 gap-4">
        {
            contacts.length > 0 && contacts.map(singleContact => <ContactsTile
                slug={singleContact.slug}
                name={singleContact.name} key={singleContact._id.toString()} createdAt={singleContact.createdAt} email={singleContact.email} subject={singleContact.subject}
            />)
        }
    </div>
}