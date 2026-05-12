function FieldSkeleton() {
    return (
        <div className="mb-4 animate-pulse">
            <div className="mb-2 h-4 w-24 rounded bg-gray-300" />
            <div className="h-12 w-full rounded-md bg-gray-300" />
        </div>
    )
}

export default function Loading() {
    return (
        <div>
            <FieldSkeleton />
            <FieldSkeleton />
            <FieldSkeleton />
            <FieldSkeleton />
            <FieldSkeleton />
            <FieldSkeleton />
            <FieldSkeleton />
            <FieldSkeleton />
            <div className="mb-6 animate-pulse">
                <div className="mb-2 h-4 w-24 rounded bg-gray-300" />
                <div className="h-24 w-full rounded-md bg-gray-300" />
            </div>
            <div className="ml-auto mb-4 h-9 w-24 animate-pulse rounded-sm bg-red-300" />
        </div>
    )
}
