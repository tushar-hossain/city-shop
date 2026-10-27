import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface Props {
  currentPage: number;
  totalPages: number;
  tag?: string;
}

const pageItem =
  "min-w-9 h-9 px-2 rounded-md border border-brand-borderColor text-sm flex items-center justify-center hover:border-brand-skyColor hover:text-brand-skyColor duration-200";

export default function Pagination({ currentPage, totalPages, tag }: Props) {
  if (totalPages <= 1) return null;

  const href = (page: number) => {
    const params = new URLSearchParams();
    if (tag) params.set("tag", tag);
    if (page > 1) params.set("page", String(page));
    const query = params.toString();
    return query ? `/blog?${query}` : "/blog";
  };

  const start = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
  const end = Math.min(totalPages, start + 4);
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <nav className="mt-8 flex items-center justify-center gap-2 flex-wrap">
      {currentPage > 1 && (
        <Link href={href(currentPage - 1)} className={pageItem} aria-label="Previous page">
          <FaChevronLeft />
        </Link>
      )}
      {pages.map((page) => (
        <Link
          key={page}
          href={href(page)}
          className={twMerge(
            pageItem,
            page === currentPage &&
              "bg-brand-skyColor border-brand-skyColor text-white hover:text-white",
          )}
        >
          {page}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link href={href(currentPage + 1)} className={pageItem} aria-label="Next page">
          <FaChevronRight />
        </Link>
      )}
    </nav>
  );
}
