import { Suspense } from "react";
import TopBar from "./components/TopBar";
import HeroSection from "./components/HeroSection";
import SectionCollections from "./components/SectionCollections";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <TopBar />
      <Suspense fallback={<div className="h-[600px] w-full bg-black" />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div className="h-screen w-full bg-black" />}>
        <SectionCollections />
      </Suspense>
    </main>
  );
}
