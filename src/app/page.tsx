import AboutUsSection from "./_components/AboutUsSection";
import CallToActionSection from "./_components/CallToActionSection";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import PriceSection from "./_components/PriceSection";
import RoomsSection from "./_components/RoomsSection";
import ServicesSection from "./_components/ServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-80">
      <Header />
      <div className="w-full max-w-[1200px] mx-auto px-4 xl:px-0">
        <div className="mx-auto flex flex-col gap-80 w-full">
          <RoomsSection />
          <ServicesSection />
          <PriceSection />
          <AboutUsSection />
          <CallToActionSection />
        </div>
      </div>

      <div className="hero-background text-gray-200">
        <Wrapper>
          <Footer />
        </Wrapper>
      </div>
    </div>
  );
}

async function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="w-full max-w-[1200px] mx-auto">{children}</div>;
}
