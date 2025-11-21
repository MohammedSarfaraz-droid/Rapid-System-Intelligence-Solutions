import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroPanel from "@/components/HeroPanel";
import BusinessStrategy from "@/components/BusinessStrategy";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BusinessStrategy />
      <HeroPanel />
    </div>
  );
}