import { memo } from "react";
import Image from "next/image";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import MDXContent from "@/components/mdx/MDXContent";

interface ServiceDetailArticleProps {
  featuredImage: string;
  featuredImageAlt: string;
  mdxSource: MDXRemoteSerializeResult;
}

const ServiceDetailArticle = memo(function ServiceDetailArticle({
  featuredImage,
  featuredImageAlt,
  mdxSource,
}: ServiceDetailArticleProps) {
  return (
    <div className="mdx-content">
      {/* Featured Image */}
      <div className="rounded-xl lg:rounded-2xl overflow-hidden mb-6 lg:mb-10 shadow-md lg:shadow-lg border border-gray-100">
        <Image
          src={featuredImage}
          alt={featuredImageAlt}
          width={800}
          height={450}
          className="w-full h-auto object-cover max-h-[250px] sm:max-h-[350px] lg:max-h-[450px]"
          quality={70}
          priority={false}
          sizes="(max-width: 768px) 100vw, 66vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>

      {/* MDX Content - Now Client Component */}
      <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
        <MDXContent source={mdxSource} />
      </div>
    </div>
  );
});

export default ServiceDetailArticle;
