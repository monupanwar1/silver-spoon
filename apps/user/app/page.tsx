import Footer from "~/components/Footer";
import HeroSection from "~/components/HeroSection";
import HowItWork from "~/components/HowItWork";
import MenuSection from "~/components/MenuSection";
import Offer from "~/components/Offer";


export default function page() {
  return (
    <main className=" w-full min-h-screen ">
      <HeroSection />
      <HowItWork />
      <MenuSection />
      <Offer />
      <Footer />
    </main>
  );
}
