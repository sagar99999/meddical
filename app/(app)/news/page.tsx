import BreadcrumbSection from "@/components/app/breadcrumb-section";
import RecentPostFilter from "@/components/app/recent-post-filter";
import RecentPostCard from "@/components/app/recent-post-card";
import ContactCtaSection from "@/components/app/contact-cta-section";

export default function NewsPage() {
    return (
        <>
            {/* BreadCrumb Section */}
            <BreadcrumbSection breadcrumb="Home / News" title="News" imageAlt="news page" />

            <div className="p-5 pt-15">
                <div className="max-w-340 flex gap-6 mx-auto">
                    <RecentPostCard />
                    {/* Right Bar */}
                    <RecentPostFilter />
                </div>
            </div>

            {/* Contact Section */}
            <ContactCtaSection sectionClassName="p-5 pb-15 pt-10 mt-2" />
        </>
    )
}
