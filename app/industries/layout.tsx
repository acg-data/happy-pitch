import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

export default function IndustriesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
