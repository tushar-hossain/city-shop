import BlogSidebar from "@/components/Blog/BlogSidebar/BlogSidebar";
import Pagination from "@/components/Blog/Pagination/Pagination";
import PostCard from "@/components/Blog/PostCard/PostCard";
import Container from "@/components/Container/Container";
import GetData from "@/helpers";
import { Post } from "@/type";
import type { Metadata } from "next";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Blog | City Shop",
};

const PER_PAGE = 9;

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page, tag } = await searchParams;
  const currentPage = Math.max(1, Number(page) || 1);
  const activeTag = typeof tag === "string" ? tag.toLowerCase() : undefined;
  const skip = (currentPage - 1) * PER_PAGE;

  const [{ posts, total }, tags, { posts: popularPosts }]: [
    { posts: Post[]; total: number },
    string[],
    { posts: Pick<Post, "id" | "title" | "views">[] },
  ] = await Promise.all([
    GetData(
      activeTag
        ? `https://dummyjson.com/posts/tag/${encodeURIComponent(activeTag)}?limit=${PER_PAGE}&skip=${skip}`
        : `https://dummyjson.com/posts?limit=${PER_PAGE}&skip=${skip}`,
    ),
    GetData("https://dummyjson.com/posts/tag-list"),
    GetData(
      "https://dummyjson.com/posts?sortBy=views&order=desc&limit=4&select=title,views",
    ),
  ]);

  return (
    <Container className="py-10">
      {/* heading */}
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">Our Blog</h1>
        <p className="mt-3 text-brand-lightText">
          Stories, ideas and inspiration from our community. Grab a coffee and
          enjoy a good read.
        </p>
        <div className="mt-4 text-xs flex items-center justify-center gap-2">
          <Link href="/" className="text-brand-lightText hover:text-brand-themeColor">
            Home
          </Link>
          <span className="text-brand-lightText">/</span>
          <span className="font-medium">Blog</span>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          {activeTag && (
            <div className="mb-5 flex items-center gap-3 text-sm">
              <span className="text-brand-lightText">
                {total} posts tagged
              </span>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs capitalize bg-brand-skyColor/10 border border-brand-skyColor/30 text-brand-themeColor py-1 px-3 rounded-full hover:bg-brand-skyColor/20 duration-200"
              >
                Tag: {activeTag}
                <IoClose />
              </Link>
            </div>
          )}

          {posts?.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-brand-lightText">
              No posts found.
            </div>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil((total ?? 0) / PER_PAGE)}
            tag={activeTag}
          />
        </div>

        <BlogSidebar
          popularPosts={popularPosts}
          tags={tags}
          activeTag={activeTag}
        />
      </div>
    </Container>
  );
}
