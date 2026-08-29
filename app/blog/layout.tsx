// app/blog/layout.tsx
// Blog gövdesinin okuma tipografisi bu kapsamda tanımlı (bkz. globals.css).
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="blog-scope">{children}</div>;
}
