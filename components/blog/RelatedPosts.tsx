import type { BlogPostMeta } from "@/lib/blog";
import BlogCard from "./BlogCard";

interface RelatedPostsProps {
  posts: BlogPostMeta[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section
      className="bg-background-light py-14 sm:py-20"
      aria-labelledby="related-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-accent" />
          <h2
            id="related-heading"
            className="text-2xl font-black text-primary-500 sm:text-3xl"
          >
            Bunları da okuyun
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
