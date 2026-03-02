import StackIcon from "tech-stack-icons";
import { StackBadge } from "./stack-badge";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  image?: string;
  stacks: string[];
  link: string;
};

export function ProjectCard({ image, stacks, title, link }: ProjectCardProps) {
  return (
    <article className="max-w-125 max-md:w-full md:h-90 max-md:h-65 flex flex-col gap-2.5 rounded-[40px] border border-gray-600 bg-black-800">
      <Link href={link} target="_blank">
        <figure className="overflow-hidden rounded-t-[40px]">
          {!image ? (
            <div className="relative w-full h-71 flex justify-center items-center bg-black hover:scale-120 transition-all duration-300">
              <StackIcon name="github" variant="dark" className="size-20" />
            </div>
          ) : (
            //eslint-disable-next-line
            <img
              src={image}
              alt={`project ${title}`}
              className="hover:scale-120 transition-all duration-300 size-full"
            />
          )}
        </figure>
      </Link>
      <h3 className="text-center text-white text-base">{title}</h3>

      <div className="flex flex-1 overflow-scroll px-5 gap-2.5 items-center scrollbar-hide rounded-b-[40px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {stacks.map((stack) => (
          <StackBadge key={stack} iconTitle={stack} />
        ))}
      </div>
    </article>
  );
}
