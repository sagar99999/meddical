import LocationMap from "@/components/app/location-map"
import BreadcrumbSection from "@/components/app/breadcrumb-section"
import Form1 from "@/components/app/form-1"
import ScheduleHours from "@/components/app/schedule-hours"
import ContactCtaSection from "@/components/app/contact-cta-section"

export default function Appointment() {
    return (
        <>
            <BreadcrumbSection breadcrumb="Home / Appointment" title="Book an Appointment" imageAlt="appointment page" />
            <div className="p-5 pt-15">
                <div className="max-w-340 flex gap-10 mx-auto">
                    <div>
                        <h2 className="text-brand-1 text-4xl font-semibold mb-8 tracking-wide">Book an Appointment</h2>
                        <p className="tracking-wide mb-16 text-lg mx-auto max-w-200">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis quas nostrum odio magnam facilis autem nobis repellendus dolores cum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis quas nostrum odio magnam facilis autem nobis repellendus dolores cum.
                        </p>
                        <div>
                            <Form1 />
                        </div>
                    </div>
                    <div className="basis-140 shrink-0">
                        <ScheduleHours />
                    </div>
                </div>
            </div>
            <LocationMap />
            <ContactCtaSection sectionClassName="p-5 py-10 pb-15" />
        </>
    )
}
