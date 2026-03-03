import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <section className="flex flex-col gap-9 py-5" id="projects">
      <h2 className="text-white font-bold text-[40px] text-center">Projects</h2>

      <div className="flex flex-wrap w-full gap-19 justify-center">
        <ProjectCard
          title="Aços Globo - Website"
          image="acos-globo.png"
          stacks={["React", "Typescript", "Zod", "Tailwindcss"]}
          link="https://www.acosglobo.com.br"
        />
        <ProjectCard
          title="Coffee delivery - Website"
          image="coffee-delivery.png"
          stacks={["React", "Typescript", "Zod", "Tailwindcss"]}
          link="https://dcuchas-coffee-delivery.vercel.app"
        />
        <ProjectCard
          title="Daily Diet - Mobile App"
          image="daily-diet.png"
          stacks={["Expo", "Typescript", "Sass", "React"]}
          link="https://github.com/danilocucharro/daily-diet"
        />
        <ProjectCard
          title="Find A Friend - API"
          image="find-a-friend.png"
          stacks={[
            "Nodejs",
            "Typescript",
            "Postgresql",
            "Docker",
            "Prisma",
            "Vitest",
            "Zod",
            "Npm",
            "Insomnia",
          ]}
          link="https://github.com/danilocucharro/find-a-friend-api"
        />
      </div>
    </section>
  );
}
