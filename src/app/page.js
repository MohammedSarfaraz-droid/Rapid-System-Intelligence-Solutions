import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/Images/RSIS-Banner.png')" }}
    >
      
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <Hero />
      </div>
    </div>
  );
}