import React from "react"

function InputSkeleton() {
    return (
        <div className="space-y-2 animate-pulse">
            <div className="h-4 w-28 rounded bg-gray-300" />
            <div className="h-12 w-full rounded-md bg-gray-300" />
        </div>
    )
}

export default function Loading() {
    return (
        <div className="space-y-6">
            <div className="space-y-2 animate-pulse">
                <div className="h-4 w-44 rounded bg-gray-300" />
                <div className="h-50 w-50 rounded-sm bg-gray-300" />
                <div className="h-10 w-50 rounded-md bg-gray-300" />
            </div>

            <InputSkeleton />
            <InputSkeleton />

            <div className="space-y-2 animate-pulse">
                <div className="h-4 w-28 rounded bg-gray-300" />
                <div className="h-50 w-full rounded-md bg-gray-300" />
            </div>

            <InputSkeleton />
            <InputSkeleton />
            <InputSkeleton />
            <InputSkeleton />

            <div className="my-4 flex justify-between">
                <div className="flex gap-3">
                    <div className="h-10 w-20 animate-pulse rounded-md bg-gray-300" />
                    <div className="h-10 w-20 animate-pulse rounded-md bg-red-300" />
                </div>
                <div className="h-10 w-24 animate-pulse rounded-md bg-gray-300" />
            </div>
        </div>
    )
}
