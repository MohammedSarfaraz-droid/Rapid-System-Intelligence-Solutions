import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroPanel from "@/components/HeroPanel";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HeroPanel />
    </div>
  );
}