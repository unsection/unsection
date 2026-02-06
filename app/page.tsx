import TopBar from "./components/TopBar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <TopBar />
      <HeroSection />
    </main>
  );
}
