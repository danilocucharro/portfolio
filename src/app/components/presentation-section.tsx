import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Button } from "./button";

export function PresentationSection() {
  return (
    <section className="flex flex-col flex-1 gap-8 items-center mt-20">
      <div className="flex flex-col max-w-157.5 items-center gap-6">
        {/*eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="profile-1.png"
          alt="Danilo Cucharro Photo"
          className="hover:scale-110 transition-all duration-800"
        />
        <div className="w-full">
          <h1 className="font-bold text-white text-4xl text-wrap text-center">
            Welcome, {"I'm"} Danilo Cucharro a Full Stack Developer
          </h1>
        </div>
        <div className="w-full flex justify-center gap-9">
          <Button className="bg-blue-800">
            <LinkedinIcon className="size-6" />
            <p>Linkedin</p>
          </Button>

          <Button className="bg-black-800">
            <GithubIcon className="size-6" />
            <p>Github</p>
          </Button>

          <Button className="text-black-800">
            <MailIcon className="size-6" />
            <p>E-mail</p>
          </Button>
        </div>
      </div>
    </section>
  );
}
