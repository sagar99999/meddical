// components/app/news-view-tracker.tsx
"use client"

import { useEffect } from "react"
import { increaseNewsViews } from "@/actions/news"

type Props = {
    slug: string
}

export default function NewsViewTracker({ slug }: Props) {
    useEffect(() => {
        const timer = setTimeout(() => {
            increaseNewsViews(slug)

        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [slug])

    return null
}