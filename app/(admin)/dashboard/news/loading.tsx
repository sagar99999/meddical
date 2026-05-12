import React from "react"

function NewsSkeletonCard() {
    return (
        <div className="bg-[#f9f9f9] rounded-lg overflow-hidden p-2 animate-pulse">
            <div className="flex gap-2">
                <div className="h-25 w-25 shrink-0 rounded-sm bg-gray-300" />
                <div className="flex-1 space-y-2 py-1">
                    <div className="h-4 w-64 rounded bg-gray-300" />
                    <div className="h-4 w-40 rounded bg-gray-300" />
                    <div className="h-4 w-28 rounded bg-gray-300" />
                </div>
            </div>
        </div>
    )
}

export default function Loading() {
    return (
        <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-end">
                <div className="h-10 w-18 animate-pulse rounded-sm bg-gray-300" />
            </div>
            <NewsSkeletonCard />
            <NewsSkeletonCard />
            <NewsSkeletonCard />
        </div>
    )
}
