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
    <article className="max-w-125 max-md:w-full flex flex-col rounded-[25px] bg-gradient-to-r from-black-800 to-black-700">
      <Link href={link} target="_blank">
        <figure className="overflow-hidden rounded-t-[25px]">
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
      <div className="flex flex-col pt-2 pb-4 gap-2 rounded-b-[25px] overflow-hidden">
        <h3 className="text-center text-white text-base">{title}</h3>

        <div className="flex overflow-scroll px-4 gap-2.5 items-center scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {stacks.map((stack) => (
            <StackBadge key={stack} iconTitle={stack} />
          ))}
        </div>
      </div>
    </article>
  );
}
