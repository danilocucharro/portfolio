import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { LinkButton } from "./link-button";

export function AboutMeSection() {
  return (
    <footer className="flex flex-col py-21.5 w-full gap-9" id="about-me">
      <h2 className="text-white text-[40px] font-bold text-center">About me</h2>

      <div className="flex max-md:flex-col p-5 gap-3 rounded-2xl bg-white/10 items-center">
        <p className="text-white max-md:hidden text-[20px] leading-9 text-balance">
          I’m a web developer with strong experience building modern,
          responsive, and high-performance interfaces. I work with HTML5, CSS3,
          JavaScript (ES6+), React, Next.js, Tailwind CSS and Git. I integrate
          REST APIs using Axios and Fetch. I turn Figma designs into functional,
          pixel-perfect websites with clean, scalable code. I’ve developed
          landing pages, dashboards, and full web systems. Committed to quality,
          deadlines, and clear communication. Let’s build something great!
        </p>
        <p className="text-white md:hidden max-md:text-sm text-[20px] leading-9 text-balance text-justify">
          I’m a web developer with strong experience building modern,
          responsive, and high-performance interfaces. I turn Figma designs into
          functional, pixel-perfect websites with clean, scalable code.
          Committed to quality, deadlines, and clear communication. Let’s build
          something great!
        </p>

        <div className="flex flex-col w-55.5 gap-2.5">
          <figure className="max-md:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="profile-3.jpg"
              alt="Danilo's picture"
              className="rounded-[20px] w-full"
            />
          </figure>
          <div className="flex max-md:justify-center text-justify justify-end py-2.5 gap-2.5">
            <LinkButton url="https://github.com/danilocucharro">
              <GithubIcon className="size-6 text-white" />
            </LinkButton>

            <LinkButton url="https://www.linkedin.com/in/danilo-cucharro-954081169/">
              <LinkedinIcon className="size-6 text-white" />
            </LinkButton>

            <LinkButton url="#">
              <MailIcon className="size-6 text-white" />
            </LinkButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
