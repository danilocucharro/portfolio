import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export function Header() {
  return (
    <div className="flex max-md:flex-col-reverse max-md:gap-4 w-full max-w-268.5 items-center justify-between py-10">
      <div className="flex px-2 gap-2 bg-white w-44 h-8 rounded-full border-gray-700 shadow-inner items-center">
        <div className="bg-dark-green-500 w-2.5 h-2.5 rounded-full animate-pulse" />
        <span className="font-extrabold text-black text-[11px]">
          Open for new projects
        </span>
      </div>

      <header className="flex bg-black-800 max-md:hidden w-137.5 h-15.5 py-2.5 px-8 rounded-full border border-gray-700 shadow-inner shadow-gray-700">
        <nav className="flex w-full gap-5 items-center justify-evenly">
          <Link
            href="/"
            className="flex flex-1 h-full justify-center items-center hover:bg-gray-700/50 rounded-full transition-colors duration-150"
          >
            <p className="font-bold text-white text-base">Home</p>
          </Link>

          <Link
            href="#projects"
            className="flex flex-1 h-full justify-center items-center hover:bg-gray-700/50 rounded-full transition-colors duration-150"
          >
            <p className="font-bold text-white text-base">Projects</p>
          </Link>

          <Link
            href="#skills"
            className="flex flex-1 h-full justify-center items-center hover:bg-gray-700/50 rounded-full transition-colors duration-150"
          >
            <p className="font-bold text-white text-base">Skills</p>
          </Link>

          <Link
            href="#about"
            className="flex flex-1 h-full justify-center items-center hover:bg-gray-700/50 rounded-full transition-colors duration-150"
          >
            <p className="font-bold text-white text-base">About</p>
          </Link>
        </nav>
      </header>

      <Dialog>
        <form className="flex w-full justify-center">
          <DialogTrigger
            className="underline font-bold text-base max-md:fixed max-md:bottom-5 max-md:z-50"
            asChild
          >
            <button className="flex px-2 h-15.5 w-40 bg-white text-black-800 shadow-inner items-center justify-center rounded-full cursor-pointer hover:bg-black hover:text-white border border-gray-700 transition-colors duration-200">
              <p className="underline font-bold text-base">GET IN TOUCH</p>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Contact me for a project</DialogTitle>
              <DialogDescription>
                Give me your contact and ideias here. Click save when
                you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" defaultValue="John Doe" />
              </Field>
              <Field>
                <Label htmlFor="username-1">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  defaultValue="johndoe@email.com"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <FieldDescription>Enter your message below.</FieldDescription>
                <Textarea
                  id="message"
                  placeholder="Type your idea for a project or just contact me."
                />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Send</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
