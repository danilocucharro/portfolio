import StackIcon, { IconName } from "tech-stack-icons";

type StacksListType = {
  name: IconName;
  variant: "dark" | "light" | "grayscale";
};

export function SkillsSection() {
  const stacksList: StacksListType[] = [
    { name: "js", variant: "light" },
    { name: "typescript", variant: "light" },
    { name: "tailwindcss", variant: "light" },
    { name: "react", variant: "light" },
    { name: "nestjs", variant: "light" },
    { name: "postgresql", variant: "light" },
    { name: "nodejs", variant: "light" },
    { name: "git", variant: "light" },
    { name: "nextjs2", variant: "dark" },
    { name: "docker", variant: "light" },
    { name: "prisma", variant: "dark" },
    { name: "figma", variant: "light" },
    { name: "github", variant: "dark" },
    { name: "zod", variant: "light" },
    { name: "jest", variant: "light" },
    { name: "vitest", variant: "light" },
  ];

  return (
    <section className="flex flex-col w-full py-21.5 gap-9" id="skills">
      <h2 className="text-[40px] font-bold text-white text-center">Skills</h2>

      <div
        className={`flex w-full max-md:grid max-md:grid-cols-16 max-md:gap-30 gap-10 md:flex-wrap bg-white/10 p-10 rounded-4xl md:justify-center overflow-scroll overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
      >
        {stacksList.map((stack) => (
          <StackIcon
            key={stack.name}
            name={stack.name}
            variant={stack.variant}
            className="size-20 hover:-translate-y-2 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
}
