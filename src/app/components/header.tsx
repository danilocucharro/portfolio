"use client";

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
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, "name must be at least 3 characters.")
    .max(32, "name must be at most 32 characters."),
  email: z.email(),
  message: z.string().min(5, "message must be filled."),
});

export function Header() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "top-center",

      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
  };

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
              Give me your contact and ideias here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <form
            id="contact-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-md:w-full max-md:justify-center"
          >
            <FieldGroup>
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field aria-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="contact-form">Name</FieldLabel>
                    <Input
                      {...field}
                      id="contact-form-name"
                      name="name"
                      defaultValue="John Doe"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="contact-form">E-mail</FieldLabel>
                    <Input
                      {...field}
                      id="contact-form-email"
                      name="email"
                      defaultValue="johndoe@email.com"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="message"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="contact-form">Message</FieldLabel>
                    <FieldDescription>
                      Enter your message below.
                    </FieldDescription>
                    <Textarea
                      {...field}
                      id="contact-form-message"
                      placeholder="Type your idea for a project or just contact me."
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            <DialogFooter className="mt-4">
              <DialogClose asChild>
                <Button variant="outline" className="cursor-pointer">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" className="cursor-pointer">
                Send
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
