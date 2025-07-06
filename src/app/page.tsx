import BestSellers from "@/components/BestSellers";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import WhyChooseUs from "@/components/WhyChooseUs";
export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSlider/>
      <Category/>
      <BestSellers/>
      <WhyChooseUs/>
      <Newsletter/>
      <Footer/>
    </>
  );
}