"use client"
import { Search } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

type SearchParamsProps = {
    searchParams: {
        page: number | null;
        category?: string | null
    }
}

export default function SearchNews({ searchParams }: SearchParamsProps) {
    const router = useRouter()

    const [searchVal, setSearchVal] = useState("")

    const getSearchLink = (search: string | null) => {
        const params = new URLSearchParams()

        // query params: category check
        if (searchParams.category) {
            params.set("category", searchParams.category)
        }

        // query params: page check
        if (searchParams.page) {
            params.delete("page")
        }

        // query params: search check
        if (search) {
            params.set('q', search.trim());
        } else {
            params.delete('q');
        }
        router.push(`/news?${params.toString()}`)

        return `/news?${params.toString()}`;
    }

    return (
        <>
            <input value={searchVal} onChange={e => setSearchVal(e.target.value)} onKeyDown={e => {
                if (e.key === "Enter") {
                    getSearchLink(searchVal)
                }
            }} className="bg-brand-1 placeholder:text-white font-light p-4 pr-10 tracking-wider rounded-sm text-white w-full" type="search" placeholder="Search" />
            <button className="cursor-pointer" onClick={() => getSearchLink(searchVal)}>
                <Search className="size-6 text-white top-3.5 right-3 absolute" />
            </button>
        </>
    )
}