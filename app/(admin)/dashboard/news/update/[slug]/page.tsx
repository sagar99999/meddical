import dbConnect from "@/lib/mongoose"
import News from "@/models/news";
import DashboardNewsUpdateForm from "@/components/dashboard/news-form"

type DashboardSingleDoctor = {
    params: Promise<{
        slug: string
    }>
}

export default async function DashboardSingleNews({ params }: DashboardSingleDoctor) {

    const { slug } = await params;
    await dbConnect()

    // Fetch the news document
    const news = await News.findOne({ slug }).lean();

    if (!news) {
        return null
    }

    const { title, author, description, image, category, _id, likes, views } = news;

    return (
        <div>
            <DashboardNewsUpdateForm slug={slug} id={_id.toString()} key={_id.toString()} likes={likes} views={views} title={title} author={author} description={description} category={category} image={image} />
        </div>
    )
}