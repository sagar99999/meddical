function SubscriberSkeletonCard() {
    return (
        <div className="bg-[#f9f9f9] rounded-md overflow-hidden p-2 py-4 animate-pulse">
            <div className="flex items-center justify-between gap-4">
                <div className="h-4 w-64 rounded bg-gray-300" />
                <div className="size-4 rounded bg-red-300" />
            </div>
        </div>
    )
}

export default function Loading() {
    return (
        <div className="grid grid-cols-1 gap-4">
            <SubscriberSkeletonCard />
            <SubscriberSkeletonCard />
            <SubscriberSkeletonCard />
        </div>
    )
}