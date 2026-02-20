import { FadeInX } from "../components/fade-in-x";
import { FadeInY } from "../components/fade-in-y";
import { PresentationSection } from "../components/presentation-section";
import { SkillSection } from "../components/skill-section";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-4.5">
      <FadeInY>
        <PresentationSection />
      </FadeInY>

      <FadeInX>
        <SkillSection />
      </FadeInX>
    </main>
  );
}
