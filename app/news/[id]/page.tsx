import BreadcrumbSection from "@/components/app/breadcrumb-section";
import TitleSection from "@/components/app/title-section";
import InfoSection from "@/components/app/info-section";
import RecentPostFilter from "@/components/app/recent-post-filter";
import RecentPostBlog from "@/components/app/recent-post-blog";

export default function SingleNewsPage() {
    return (
        <>
            {/* BreadCrumb Section */}
            <BreadcrumbSection />

            <div className="p-5 pt-15">
                <div className="max-w-340 flex gap-6 mx-auto">
                    <RecentPostBlog />
                    {/* Right Bar */}
                    <RecentPostFilter />
                </div>
            </div>

            {/* Contact Section */}
            <div className="p-5 pb-15 pt-10 mt-2">
                <div className="max-w-340 mx-auto">
                    <TitleSection title="Get in touch" subtitle="Contact" />
                    <InfoSection containerClass="grid grid-cols-4 gap-6" />
                </div>
            </div>
        </>
    )
}
