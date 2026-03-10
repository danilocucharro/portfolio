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
import emailjs from "@emailjs/browser";
import { useState } from "react";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, "name must be at least 3 characters.")
    .max(32, "name must be at most 32 characters."),
  email: z.email(),
  message: z.string().min(5, "message must be filled."),
});

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    try {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          "#contact-form",
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          },
        )
        .then(() =>
          toast.success("Thank you! your message already reach me 😃", {
            position: "top-center",
          }),
        );
    } catch (err) {
      toast.warning("Some bug occured and your message didn't reached me 😭", {
        position: "top-center",
      });
    } finally {
      form.reset();
      setIsModalOpen(false);
    }
  };

  return (
    <div className="flex max-md:flex-col-reverse max-md:gap-4 w-full max-w-268.5 items-center justify-between py-10">
      <div className="flex px-2 gap-2 bg-white w-44 h-8 rounded-full border-gray-700 shadow-inner items-center">
        <div className="bg-blue-500 w-2.5 h-2.5 rounded-full animate-pulse" />
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
                      autoComplete="off"
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
                      name="message"
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
