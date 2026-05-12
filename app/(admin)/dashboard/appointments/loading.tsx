function AppointmentSkeletonCard() {
    return (
        <div className="bg-[#f9f9f9] rounded-md overflow-hidden p-2 animate-pulse">
            <div className="space-y-2">
                <div className="h-4 w-40 rounded bg-gray-300" />
                <div className="h-4 w-56 rounded bg-gray-300" />
                <div className="h-4 w-44 rounded bg-gray-300" />
                <div className="h-4 w-32 rounded bg-gray-300" />
                <div className="h-4 w-28 rounded bg-gray-300" />
                <div className="h-4 w-24 rounded bg-gray-300" />
            </div>
        </div>
    )
}

export default function Loading() {
    return (
        <div className="grid grid-cols-1 gap-4">
            <AppointmentSkeletonCard />
            <AppointmentSkeletonCard />
            <AppointmentSkeletonCard />
        </div>
    )
}
