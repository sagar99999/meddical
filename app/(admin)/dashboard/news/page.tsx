import NewsTile from "@/components/dashboard/news-tile"
import dbConnect from "@/lib/mongoose"
import News from "@/models/news"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus } from "lucide-react"

export default async function DashboardNews() {
  await dbConnect()

  const news = await News.find()

  if (!news) {
    return <p>No page found</p>
  }

  return <div className="grid grid-cols-1 gap-4">
    <div className="flex justify-end">
      <Button variant={"outline"} asChild className="w-18 h-10 cursor-pointer rounded-sm">
        <Link href="/dashboard/news/new">
          <Plus className="size-4" />
          Add
        </Link>
      </Button>
    </div>
    {
      news.length > 0 && news.map(singleNews => <NewsTile slug={singleNews.slug}
        category={singleNews.category} title={singleNews.title}
        image={singleNews.image} key={String(singleNews._id)}
        author={singleNews.author} />)
    }
  </div>
}