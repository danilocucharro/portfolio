import StackIcon from "tech-stack-icons";

export function SkillSection() {
  return (
    <section className="flex flex-col w-full py-21.5 gap-9">
      <h2 className="text-[40px] font-bold text-white">Skills</h2>

      <div className="flex w-full gap-10 flex-wrap bg-white/10 p-10 rounded-4xl justify-center">
        <StackIcon
          name="js"
          className="size-20 hover:-translate-y-2 transition-transform duration-300"
        />
        <StackIcon
          name="typescript"
          className="size-20 hover:-translate-y-2 transition-transform duration-300"
        />
        <StackIcon
          name="tailwindcss"
          className="size-20 hover:-translate-y-2 transition-transform duration-300"
        />
        <StackIcon
          name="react"
          className="size-20 hover:-translate-y-2 transition-transform duration-300"
        />
        <StackIcon
          name="nestjs"
          className="size-20 hover:-translate-y-2 transition-transform duration-300"
        />
        <StackIcon
          name="postgresql"
          className="size-20 hover:-translate-y-2 transition-transform duration-300"
        />
        <StackIcon
          name="nodejs"
          className="size-20 hover:-translate-y-2 transition-transform duration-300"
        />
        <StackIcon
          name="git"
          className="size-20 hover:-translate-y-2 transition-transform duration-300"
        />
        <StackIcon
          name="nextjs2"
          variant="dark"
          className="size-20 hover:-translate-y-2 transition-transform duration-300"
        />
        <StackIcon
          name="docker"
          className="size-20 hover:-translate-y-2 transition-transform duration-300"
        />
        <StackIcon
          name="prisma"
          variant="dark"
          className="size-20 hover:-translate-y-2 transition-transform duration-300"
        />
        <StackIcon
          name="figma"
          className="size-20 hover:-translate-y-2 transition-transform duration-300"
        />
        <StackIcon
          name="github"
          variant="dark"
          className="size-20 hover:-translate-y-2 transition-transform duration-300"
        />
        <StackIcon
          name="zod"
          className="size-20 hover:-translate-y-2 transition-transform duration-300"
        />
      </div>
    </section>
  );
}
