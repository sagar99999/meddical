import ServicesTile from "@/components/dashboard/services-tile"
import dbConnect from "@/lib/mongoose"
import Services from "@/models/services"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus } from "lucide-react"

export default async function DashboardServices() {
    await dbConnect()

    const services = await Services.find()

    if (!services) {
        return <p>No page found</p>
    }

    return <div className="grid grid-cols-1 gap-4">
        <div className="flex justify-end">
            <Button variant={"outline"} asChild className="w-18 h-10 cursor-pointer rounded-sm">
                <Link href="/dashboard/services/new">
                    <Plus className="size-4" />
                    Add
                </Link>
            </Button>
        </div>

        {
            services.length > 1 && services.map(singleService => <ServicesTile
                category={singleService.category} image={singleService.image} slug={singleService.slug}
                title={singleService.title} key={singleService._id.toString()} description={singleService.description}
            />)
        }

    </div>
}