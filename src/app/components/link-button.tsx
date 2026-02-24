import Link from "next/link";
import React from "react";

type ButtonLinkProps = {
  children: React.ReactNode;
  url: string;
};

export function LinkButton({ children, url }: ButtonLinkProps) {
  return (
    <Link
      href={url}
      target="_blank"
      className="flex justify-center items-center size-10 border border-gray-700 bg-transparent rounded-full"
    >
      {children}
    </Link>
  );
}
