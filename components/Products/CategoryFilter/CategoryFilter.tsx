import { CategoryWithMeta } from "@/type";
import Link from "next/link";
import { FaFilter } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface Props {
  categories: CategoryWithMeta[];
  activeCategory?: string;
}

export default function CategoryFilter({ categories, activeCategory }: Props) {
  const items = [
    { slug: "", name: "All Products", href: "/products", count: null },
    ...categories.map((category) => ({
      slug: category.slug,
      name: category.name,
      href: `/products?category=${category.slug}`,
      count: category.count,
    })),
  ];

  return (
    <aside className="border border-brand-borderColor rounded-md bg-white">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-brand-borderColor font-semibold">
        <FaFilter className="text-sm" />
        Filters
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-3">Shop by Category</h3>
        <ul className="flex flex-col gap-1.5 max-h-96 lg:max-h-none overflow-y-auto">
          {items.map((item) => {
            const isActive = (activeCategory ?? "") === item.slug;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={twMerge(
                    "flex items-center gap-2 text-sm hover:text-brand-skyColor duration-200",
                    isActive && "text-brand-skyColor font-medium",
                  )}
                >
                  <span
                    className={twMerge(
                      "w-3.5 h-3.5 rounded-full border border-gray-400 flex items-center justify-center",
                      isActive && "border-brand-skyColor",
                    )}
                  >
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-brand-skyColor" />
                    )}
                  </span>
                  {item.name}
                  {item.count !== null && (
                    <span className="text-brand-lightText">({item.count})</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
