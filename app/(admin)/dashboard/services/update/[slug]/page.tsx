import dbConnect from "@/lib/mongoose"
import Services from "@/models/services";
import DashboardServiceUpdateForm from "@/components/dashboard/service-form"

type DashboardSingleDoctor = {
    params: Promise<{
        slug: string
    }>
}

export default async function DashboardSingleNews({ params }: DashboardSingleDoctor) {

    const { slug } = await params;
    await dbConnect()

    // Fetch the service document
    const service = await Services.findOne({ slug }).lean();

    if (!service) {
        return <p>Not Found</p>
    }

    const { title, category, image, description, highlights, _id } = service;

    return (
        <div>
            <DashboardServiceUpdateForm slug={slug} highlights={highlights} id={_id.toString()} key={_id.toString()} title={title} description={description} category={category} image={image} />
        </div>
    )
}