import dbConnect from "@/lib/mongoose"
import Appointments from "@/models/appointments"
import DashboardAppointmentsForm from "@/components/dashboard/appointments-form"

type AppointmentForm = {
    params: Promise<{
        slug: string
    }>
}

export default async function DashboardSingleAppointment({ params }: AppointmentForm) {
    const { slug } = await params;
    await dbConnect()

    const appointment = await Appointments.findOne({ slug }).lean();

    if (!appointment) {
        return null
    }

    return (
        <DashboardAppointmentsForm message={appointment.message} department={appointment.department} date={appointment.date} doctor={appointment.doctor} time={appointment.time} name={appointment.name} gender={appointment.phone} email={appointment.email} phone={appointment.phone} />
    )
}