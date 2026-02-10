import TopBar from "../components/TopBar";
import SectionDetails from "../components/SectionDetails";
import RelatedSection from "../components/RelatedSection";

export default function DetailsPage() {
  return (
    <main className="min-h-screen bg-black">
      <TopBar />
      <SectionDetails />
      <RelatedSection />
    </main>
  );
}
