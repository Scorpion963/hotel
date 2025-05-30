
import AboutUsSection from "./_components/AboutUsSection";
import CallToActionSection from "./_components/CallToActionSection";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import PriceSection from "./_components/PriceSection";
import RoomsSection from "./_components/RoomsSection";
import ServicesSection from "./_components/ServicesSection";

export default function Home() {
  return (
    <div className="h-[2000px] flex flex-col gap-44">
      <Header />
      <RoomsSection />
      <ServicesSection />
      <PriceSection />
      <AboutUsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
