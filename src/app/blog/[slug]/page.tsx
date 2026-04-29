import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import BlogSlugPage from "@/components/blog/BlogSlugPage";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return <BlogSlugPage post={post} />;
}