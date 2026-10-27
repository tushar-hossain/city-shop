import { Post } from "@/type";
import Link from "next/link";
import { FaArrowRight, FaRegEye, FaRegThumbsUp } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { coverColor, readTime } from "../blogUtils";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <Link
      href={`/blog/${post?.id}`}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 duration-300 flex flex-col"
    >
      {/* cover */}
      <div
        className={twMerge(
          "h-36 bg-linear-to-br flex items-end p-4",
          coverColor(post?.id),
        )}
      >
        <span className="text-white/90 text-2xl font-bold capitalize group-hover:scale-105 origin-bottom-left duration-300">
          #{post?.tags?.[0] ?? "blog"}
        </span>
      </div>
      {/* details */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-semibold text-base line-clamp-2 capitalize group-hover:text-brand-skyColor duration-200">
          {post?.title}
        </h3>
        <p className="text-sm text-brand-lightText line-clamp-3">{post?.body}</p>
        <div className="flex flex-wrap gap-1.5">
          {post?.tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-brand-lightBg text-brand-lightText px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-3 border-t border-brand-borderColor flex items-center justify-between text-xs text-brand-lightText">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <FaRegEye /> {post?.views}
            </span>
            <span className="flex items-center gap-1">
              <FaRegThumbsUp /> {post?.reactions?.likes}
            </span>
            <span>{readTime(post?.body ?? "")} min read</span>
          </div>
          <FaArrowRight className="text-brand-skyColor group-hover:translate-x-1 duration-200" />
        </div>
      </div>
    </Link>
  );
}
