import TopBar from "@/app/components/TopBar";
import HeroSection from "@/app/components/HeroSection";
import SectionCollections from "@/app/components/SectionCollections";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return (
    <main className="min-h-screen bg-black">
      <TopBar />
      <HeroSection />
      <SectionCollections />
    </main>
  );
}
