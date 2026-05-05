import TopInfo from "@/components/app/top-info";
import NavBar from "@/components/app/nav-bar";
import Footer from "@/components/app/footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="sticky top-0 z-50 shadow-2xl">
                <TopInfo />
                <NavBar />
            </div>
            {children}
            <Footer />
        </>
    )
}