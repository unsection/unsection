import TopBar from "./components/TopBar";
import HeroSection from "./components/HeroSection";
import SectionCollections from "./components/SectionCollections";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <TopBar />
      <HeroSection />
      <SectionCollections />
    </main>
  );
}
