import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import Callout from "./Callout";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type LinkProps = ComponentPropsWithoutRef<"a">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type ImageProps = ComponentPropsWithoutRef<"img">;
type CodeProps = ComponentPropsWithoutRef<"code">;
type PreProps = ComponentPropsWithoutRef<"pre">;

export const MDXComponents = {
  // Custom components
  Callout,

  // Override default HTML elements
  h1: ({ children, ...props }: HeadingProps) => (
    <h1
      className="text-3xl sm:text-4xl font-black text-primary-500 mb-4 mt-8"
      {...props}
    >
      {children}
    </h1>
  ),

  h2: ({ children, ...props }: HeadingProps) => (
    <h2
      className="text-2xl sm:text-3xl font-black text-primary-500 mb-4 mt-8"
      {...props}
    >
      {children}
    </h2>
  ),

  h3: ({ children, ...props }: HeadingProps) => (
    <h3
      className="text-xl sm:text-2xl font-bold text-primary-500 mb-3 mt-6"
      {...props}
    >
      {children}
    </h3>
  ),

  p: ({ children, ...props }: ParagraphProps) => (
    <p className="text-slate-custom leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),

  a: ({ href, children, ...props }: LinkProps) => (
    <Link
      href={href || "#"}
      className="text-accent font-medium hover:underline"
      {...props}
    >
      {children}
    </Link>
  ),

  ul: ({ children, ...props }: ListProps) => (
    <ul className="list-disc pl-6 my-6 space-y-2" {...props}>
      {children}
    </ul>
  ),

  ol: ({ children, ...props }: ListProps) => (
    <ol className="list-decimal pl-6 my-6 space-y-2" {...props}>
      {children}
    </ol>
  ),

  li: ({ children, ...props }: ListItemProps) => (
    <li className="text-slate-custom leading-relaxed" {...props}>
      {children}
    </li>
  ),

  strong: ({ children, ...props }: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-bold text-primary-500" {...props}>
      {children}
    </strong>
  ),

  blockquote: ({ children, ...props }: BlockquoteProps) => (
    <blockquote
      className="border-l-4 border-accent bg-primary-500/5 p-4 lg:p-6 rounded-lg my-6 italic"
      {...props}
    >
      {children}
    </blockquote>
  ),

  img: (props: ImageProps) => {
    const { src, alt, width, height } = props;

    // Type guard: Validate src is string
    if (!src || typeof src !== "string") {
      console.warn("MDX Image: Invalid src prop");
      return null;
    }

    // Type guard: Validate alt (required for accessibility)
    const altText = typeof alt === "string" ? alt : "";

    // Use Next.js Image for optimization
    const imageWidth = typeof width === "number" ? width : 800;
    const imageHeight = typeof height === "number" ? height : 400;

    return (
      <Image
        src={src}
        alt={altText}
        width={imageWidth}
        height={imageHeight}
        className="rounded-xl shadow-md my-8 w-full h-auto"
        style={{ objectFit: "cover" }}
        quality={75}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 66vw"
      />
    );
  },

  code: ({ children, ...props }: CodeProps) => (
    <code
      className="bg-gray-100 text-primary-500 px-2 py-1 rounded text-sm font-mono"
      {...props}
    >
      {children}
    </code>
  ),

  pre: ({ children, ...props }: PreProps) => (
    <pre
      className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6"
      {...props}
    >
      {children}
    </pre>
  ),
};
