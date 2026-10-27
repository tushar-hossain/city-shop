import { coverColor, initials, readTime } from "@/components/Blog/blogUtils";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import GetData from "@/helpers";
import { Post, PostComment } from "@/type";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaRegEye,
  FaRegThumbsDown,
  FaRegThumbsUp,
} from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [post, { comments }]: [Post, { comments: PostComment[] }] =
    await Promise.all([
      GetData(`https://dummyjson.com/posts/${id}`),
      GetData(`https://dummyjson.com/posts/${id}/comments`),
    ]);

  if (!post?.id) notFound();

  const author = await GetData(
    `https://dummyjson.com/users/${post.userId}?select=firstName,lastName`,
  );
  const authorName =
    [author?.firstName, author?.lastName].filter(Boolean).join(" ") ||
    "City Shop";

  return (
    <Container className="py-10 max-w-4xl">
      {/* breadcrumb */}
      <div className="text-xs flex items-center gap-2 mb-5 min-w-0">
        <Link href="/" className="text-brand-lightText hover:text-brand-themeColor">
          Home
        </Link>
        <span className="text-brand-lightText">/</span>
        <Link href="/blog" className="text-brand-lightText hover:text-brand-themeColor">
          Blog
        </Link>
        <span className="text-brand-lightText">/</span>
        <span className="font-medium truncate capitalize">{post.title}</span>
      </div>

      {/* cover */}
      <div
        className={twMerge(
          "h-48 md:h-64 rounded-lg bg-linear-to-br flex items-end p-6",
          coverColor(post.id),
        )}
      >
        <span className="text-white/90 text-3xl md:text-5xl font-bold capitalize">
          #{post.tags?.[0] ?? "blog"}
        </span>
      </div>

      <article className="mt-8">
        <h1 className="text-2xl md:text-4xl font-bold capitalize">
          {post.title}
        </h1>

        {/* meta */}
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 pb-5 border-b border-brand-borderColor">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-brand-themeColor text-white text-sm font-semibold flex items-center justify-center">
              {initials(authorName)}
            </span>
            <div>
              <p className="font-semibold text-sm">{authorName}</p>
              <p className="text-xs text-brand-lightText">
                {readTime(post.body)} min read
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-brand-lightText">
            <span className="flex items-center gap-1.5">
              <FaRegEye /> {post.views}
            </span>
            <span className="flex items-center gap-1.5">
              <FaRegThumbsUp /> {post.reactions?.likes}
            </span>
            <span className="flex items-center gap-1.5">
              <FaRegThumbsDown /> {post.reactions?.dislikes}
            </span>
          </div>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-gray-700">
          {post.body}
        </p>

        {/* tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags?.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${tag}`}
              className="text-xs capitalize border border-brand-borderColor px-3 py-1 rounded-full hover:border-brand-skyColor hover:text-brand-skyColor duration-200"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </article>

      {/* comments */}
      <section className="mt-10 bg-brand-lightBg rounded-lg p-6">
        <Title>{`Comments (${comments?.length ?? 0})`}</Title>
        {comments?.length ? (
          <ul className="mt-5 flex flex-col gap-4">
            {comments.map((comment) => (
              <li key={comment.id} className="bg-white rounded-lg p-4 flex gap-3">
                <span className="w-9 h-9 shrink-0 rounded-full bg-brand-skyColor/10 text-brand-skyColor text-xs font-semibold flex items-center justify-center">
                  {initials(comment.user?.fullName ?? "")}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-semibold text-sm">
                      {comment.user?.fullName}
                    </p>
                    <span className="text-xs text-brand-lightText flex items-center gap-1">
                      <FaRegThumbsUp /> {comment.likes}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-700">{comment.body}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm text-brand-lightText">No comments yet.</p>
        )}
      </section>

      <Link
        href="/blog"
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-skyColor hover:text-brand-themeColor duration-200"
      >
        <FaArrowLeft /> Back to Blog
      </Link>
    </Container>
  );
}
