import { FadeIn } from "../components/fade-in";
import { PresentationSection } from "../components/presentation-section";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-4.5">
      <FadeIn>
        <PresentationSection />
      </FadeIn>
    </main>
  );
}
