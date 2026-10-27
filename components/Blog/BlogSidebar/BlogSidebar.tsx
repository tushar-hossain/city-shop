import { Post } from "@/type";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import Title from "../../Title/Title";

interface Props {
  popularPosts: Pick<Post, "id" | "title" | "views">[];
  tags: string[];
  activeTag?: string;
}

export default function BlogSidebar({ popularPosts, tags, activeTag }: Props) {
  return (
    <aside className="flex flex-col gap-5">
      <div className="bg-white rounded-lg shadow-md p-5">
        <Title className="text-lg">Popular Posts</Title>
        <ol className="mt-4 flex flex-col gap-4">
          {popularPosts?.map((post, index) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`} className="group flex gap-3">
                <span className="w-8 h-8 shrink-0 rounded-full bg-brand-skyColor/10 text-brand-skyColor text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-medium line-clamp-2 capitalize group-hover:text-brand-skyColor duration-200">
                    {post.title}
                  </p>
                  <p className="mt-1 text-xs text-brand-lightText flex items-center gap-1">
                    <FaRegEye /> {post.views} views
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <div className="bg-white rounded-lg shadow-md p-5">
        <Title className="text-lg">Tags</Title>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${tag}`}
              className={twMerge(
                "text-xs capitalize border border-brand-borderColor px-3 py-1 rounded-full hover:border-brand-skyColor hover:text-brand-skyColor duration-200",
                activeTag === tag &&
                  "bg-brand-skyColor border-brand-skyColor text-white hover:text-white",
              )}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
