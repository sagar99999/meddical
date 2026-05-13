import Image from "next/image"
import dbConnect from "@/lib/mongoose"
import News from "@/models/news"
import Link from "next/link"
import { format } from "date-fns"
import SearchNews from "./search-news"

type RecentPostFilterProps = {
  searchParams: {
    page: number | null;
    category?: string | null;
    q?: string | null
  }
}

export default async function RecentPostFilter({ searchParams }: RecentPostFilterProps) {

  const getCategoryLink = (newCategory: string | null) => {
    const params = new URLSearchParams();

    // query params: page check
    if (searchParams.page) {
      params.delete("page")
    }

    // query params: search check
    if (searchParams.q) {
      params.delete('q')
    }

    // query params: category check
    if (newCategory) {
      params.set('category', newCategory);
    } else {
      params.delete('category');
    }

    return `/news?${params.toString()}`;
  }

  await dbConnect()

  const recentPosts = await News.find().sort({ createdAt: -1 }).limit(4).lean()
  const categories = await News.find().select("category");

  // individual category count
  let categorySurgery = 0;
  let categoryHealthCare = 0;
  let categoryMedical = 0;
  let categoryProfessional = 0;

  if (categories?.length) {
    categories.forEach(category => {
      if (category.category === "Surgery") {
        categorySurgery++
      } else if (category.category === "Health Care") {
        categoryHealthCare++
      } else if (category.category === "Medical") {
        categoryMedical++
      } else if (category.category === "Professional") {
        categoryProfessional++
      }
    })
  }

  return (
    <div className="basis-100 shrink-0">
      <div className="relative mb-6">
        <SearchNews searchParams={searchParams} />
      </div>
      <div className="p-5 border rounded-sm mb-6">
        <h2 className="text-brand-1 text-4xl font-semibold mb-10 tracking-wide">Recent Posts</h2>
        <ul className="grid gap-6 grid-cols-1">
          {
            recentPosts?.length && recentPosts.map(recentPost => <li key={recentPost._id.toString()}>
              <Link href={`/news/${recentPost.slug}`} className="flex gap-3 group cursor-pointer">
                <div className="relative basis-20 shrink-0">
                  <Image src={`${recentPost.image}`} alt={`${recentPost.title}`} fill sizes="80px" className="object-cover object-center rounded-sm" />
                </div>
                <div>
                  <p className="text-brand mb-2 text-sm tracking-wide line-clamp-1">{format(recentPost.createdAt, 'eeee dd, MMMM yyyy')}</p>
                  <p className="tracking-wide line-clamp-2 group-hover:underline">
                    {recentPost.description}
                  </p>
                </div>
              </Link>
            </li>)
          }
        </ul>
      </div>
      <div className="p-5 border rounded-sm">
        <h2 className="text-brand-1 text-4xl font-semibold mb-10 tracking-wide">Categories</h2>
        <ul className="grid gap-6 grid-cols-1">
          <li className="text-lg hover:underline cursor-pointer pl-6 tracking-wide relative">
            <Link href={getCategoryLink("Surgery")}>
              Surgery
              <span className="absolute right-7 text-sm bg-brand text-white p-1 px-2.5 font-semibold rounded-full">{categorySurgery}</span>
            </Link>
          </li>
          <li className="text-lg hover:underline cursor-pointer pl-6 tracking-wide relative">
            <Link href={getCategoryLink("Health Care")}>
              Health Care
              <span className="absolute right-7 text-sm bg-brand text-white p-1 px-2.5 font-semibold rounded-full">
                {categoryHealthCare}
              </span>
            </Link>
          </li>
          <li className="text-lg hover:underline cursor-pointer pl-6 tracking-wide relative">
            <Link href={getCategoryLink("Medical")}>
              Medical
              <span className="absolute right-7 text-sm bg-brand text-white p-1 px-2.5 font-semibold rounded-full">
                {categoryMedical}
              </span>
            </Link>
          </li>
          <li className="text-lg hover:underline cursor-pointer pl-6 tracking-wide relative">
            <Link href={getCategoryLink("Professional")}>
              Professional
              <span className="absolute right-7 text-sm bg-brand text-white p-1 px-2.5 font-semibold rounded-full">
                {categoryProfessional}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}