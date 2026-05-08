"use client"

import { Button } from "../ui/button"
import { Heart } from "lucide-react"
import { LikeNewsById } from "@/actions/news"
import { toast } from "sonner"

type LikeBtnProps = {
    likes: number;
    id: string
}

export default function LikeBtn({ likes, id }: LikeBtnProps) {
    return (
        <Button onClick={async () => {
            await LikeNewsById(id)
            toast.success("News liked 👍")
        }} asChild className="bg-transparent text-brand-1 box-content text-lg font-normal w-auto! border-4 p-0! cursor-pointer">
            <div>
                <Heart className="size-5 text-red-600" />
                <p className="tracking-wide">{likes}</p>
            </div>
        </Button>
    )
}
