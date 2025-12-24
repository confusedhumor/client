import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyChooseUs } from "@/components/home/FeaturesSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
