import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button">;

export function Button({ className, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={twMerge(
        "flex px-8 h-15.5 bg-white justify-center items-center gap-2.5 text-white font-bold text-base rounded-full hover:shadow-2xl cursor-pointer hover:scale-105 transition-all duration-300",
        className,
      )}
      {...props}
    ></button>
  );
}
