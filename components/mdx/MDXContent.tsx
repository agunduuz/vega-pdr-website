// components/mdx/MDXContent.tsx
"use client";

import dynamic from "next/dynamic";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

const MDXRenderer = dynamic(() => import("./MDXRenderer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-12">
      <div className="animate-pulse text-slate-custom">
        İçerik yükleniyor...
      </div>
    </div>
  ),
});

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

export default function MDXContent({ source }: MDXContentProps) {
  return <MDXRenderer source={source} />;
}
