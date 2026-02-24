import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { LinkButton } from "./link-button";

export function AboutMeSection() {
  return (
    <section className="flex flex-col py-21.5 w-full gap-9" id="about-me">
      <h2 className="text-white text-[40px] font-bold">About me</h2>

      <div className="flex p-5 gap-3 border border-gray-700 rounded-[40px] bg-black-800 items-center">
        <p className="text-white text-[20px] leading-9">
          I’m a web developer with strong experience building modern,
          responsive, and high-performance interfaces. I work with HTML5, CSS3,
          JavaScript (ES6+), React, Next.js, Tailwind CSS and Git. I integrate
          REST APIs using Axios and Fetch. I turn Figma designs into functional,
          pixel-perfect websites with clean, scalable code. I’ve developed
          landing pages, dashboards, and full web systems. Committed to quality,
          deadlines, and clear communication. Let’s build something great!
        </p>

        <div className="flex flex-col w-55.5 gap-2.5">
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="profile-3.jpg"
              alt="Danilo's picture"
              className="rounded-[20px] w-full"
            />
          </figure>
          <div className="flex justify-end py-2.5 gap-2.5">
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
    </section>
  );
}
