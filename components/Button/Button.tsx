import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface buttonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  className,
  href,
  onClick,
}: buttonProps) {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={twMerge(
            "bg-brand-themeColor/80 text-white py-2 px-6 hover:bg-brand-themeColor cursor-pointer duration-200",
            className,
          )}
        >
          {children}
        </Link>
      ) : (
        <button
          className={twMerge(
            "bg-brand-themeColor/80 text-white py-2 px-6 hover:bg-brand-themeColor cursor-pointer duration-200",
            className,
          )}
        >
          {children}
        </button>
      )}
    </>
  );
}
