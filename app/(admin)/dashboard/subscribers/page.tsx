import SubscribersTile from "@/components/dashboard/subscribers-tile"
import dbConnect from "@/lib/mongoose"
import Subscribers from "@/models/subscribers"

export default async function DashboardSubscribers() {
    await dbConnect()

    const subscribers = await Subscribers.find().sort({ createdAt: -1 }).lean()

    if (subscribers.length < 1) {
        return null
    }

    return <div className="grid grid-cols-1 gap-4">
        {
            subscribers.length > 0 && subscribers.map(singleSubscriber => <SubscribersTile key={singleSubscriber.email} email={singleSubscriber.email} />)
        }
    </div>
}