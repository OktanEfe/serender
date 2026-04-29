import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "@/data/posts";
import BlogSlugPage from "@/components/blog/BlogSlugPage";

// Her blog yazısı için dinamik metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Yazı Bulunamadı",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      post.category,
      post.title,
      "Serender blog",
      "ekolojik yaşam",
      "sürdürülebilirlik",
    ],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

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
