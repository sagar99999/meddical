import AppointmentsTile from "@/components/dashboard/appointments-tile"
import dbConnect from "@/lib/mongoose"
import Appointments from "@/models/appointments"

export default async function DashboardServices() {
    await dbConnect()

    const appointments = await Appointments.find().sort({ createdAt: -1 }).lean()

    if (!appointments) {
        return <p>No page found</p>
    }

    return <div className="grid grid-cols-1 gap-4">
        {
            appointments.length > 0 && appointments.map(singleAppointment => <AppointmentsTile
                slug={singleAppointment.slug} phone={singleAppointment.phone} time={singleAppointment.time} date={singleAppointment.date}
                name={singleAppointment.name} key={singleAppointment._id.toString()} email={singleAppointment.email} department={singleAppointment.department}
            />)
        }
    </div>
}