import dbConnect from "@/lib/mongoose"
import Doctors from "@/models/doctors";
import DashboardDoctorUpdateForm from "@/components/dashboard/doctor-form"

type DashboardSingleDoctor = {
    params: Promise<{
        slug: string
    }>
}

export default async function DashboardSingleDoctor({ params }: DashboardSingleDoctor) {

    const { slug } = await params;
    await dbConnect()

    // Fetch the doctor document
    const doctor = await Doctors.findOne({ slug }).lean(); // lean() returns plain object

    if (!doctor) {
        return <p>Not Found</p>
    }

    const { name, department, description, socialLinks, image, _id } = doctor;
    return (
        <div>
            <DashboardDoctorUpdateForm id={_id.toString()} key={_id.toString()} name={name} department={department} slug={slug} description={description} socialLinks={socialLinks} image={image} />
        </div>
    )
}