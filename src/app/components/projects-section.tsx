import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <section className="flex flex-col gap-9 py-21.5" id="projects">
      <h2 className="text-white font-bold text-[40px]">Projects</h2>

      <div className="flex w-full flex-wrap gap-19">
        <ProjectCard
          title="Aços Globo - Website"
          image="acosglobo.png"
          stacks={["React", "Typescript", "Zod", "Tailwindcss", "Figma"]}
          link="https://www.acosglobo.com.br"
        />
        <ProjectCard
          title="Coffee delivery - Website"
          image="coffee-delivery.png"
          stacks={["React", "Typescript", "Zod", "Tailwindcss", "Figma"]}
          link="https://dcuchas-coffee-delivery.vercel.app"
        />
      </div>
    </section>
  );
}
