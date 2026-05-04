import BreadcrumbSection from "@/components/app/breadcrumb-section";
import RecentPostFilter from "@/components/app/recent-post-filter";
import RecentPostBlog from "@/components/app/recent-post-blog";
import ContactCtaSection from "@/components/app/contact-cta-section";

export default function SingleNewsPage() {
    return (
        <>
            {/* BreadCrumb Section */}
            <BreadcrumbSection breadcrumb="Home / News" title="News Article" imageAlt="news article page" />

            <div className="p-5 pt-15">
                <div className="max-w-340 flex gap-6 mx-auto">
                    <RecentPostBlog />
                    {/* Right Bar */}
                    <RecentPostFilter />
                </div>
            </div>

            {/* Contact Section */}
            <ContactCtaSection sectionClassName="p-5 pb-15 pt-10 mt-2" />
        </>
    )
}
