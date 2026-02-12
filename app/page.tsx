import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import LogoBar from "./sections/LogoBar";
import TopProviders from "./sections/TopProviders";
import WhyChoose from "./sections/WhyChoose";
import Statistics from "./sections/Statistics";
import ComplexStrategies from "./sections/ComplexStrategies";
import TrustedBy from "./sections/TrustedBy";
import Testimonials from "./sections/Testimonials";
import CTASection from "./sections/CTASection";
import ContactSection from "./sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <TopProviders />
        <WhyChoose />
        <Statistics />
        <ComplexStrategies />
        <TrustedBy />
        <Testimonials />
        <CTASection />
        <ContactSection />
      </main>
    </div>
  );
}
