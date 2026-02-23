import { FadeInX } from "../components/fade-in-x";
import { FadeInY } from "../components/fade-in-y";
import { PresentationSection } from "../components/presentation-section";
import { ProjectsSection } from "../components/projects-section";
import { SkillsSection } from "../components/skills-section";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-4.5">
      <FadeInY>
        <PresentationSection />
      </FadeInY>

      <FadeInX>
        <SkillsSection />
      </FadeInX>

      <FadeInY>
        <ProjectsSection />
      </FadeInY>
    </main>
  );
}
