import DoctorsTile from "@/components/dashboard/doctors-tile"
import dbConnect from "@/lib/mongoose"
import Doctors from "@/models/doctors"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus } from "lucide-react"

export default async function DashboardDoctors() {
    await dbConnect()

    const docs = await Doctors.find()

    if (!docs) {
        return null
    }

    return <div className="grid grid-cols-1 gap-4">
        <div className="flex justify-end">
            <Button variant={"outline"} asChild className="w-18 h-10 cursor-pointer rounded-sm">
                <Link href="/dashboard/doctors/new">
                    <Plus className="size-4" />
                    Add
                </Link>
            </Button>
        </div>
        {
            docs.length > 0 && docs.map(singleDoc => <DoctorsTile description={singleDoc.description} key={singleDoc._id.toString()} name={singleDoc.name} department={singleDoc.department} image={singleDoc.image} slug={singleDoc.slug}
            />)
        }
    </div>
}