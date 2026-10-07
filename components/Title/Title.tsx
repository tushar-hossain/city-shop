import { twMerge } from "tailwind-merge";

interface TitleProps {
  children: string;
  className?: string;
}
export default function Title({ children, className }: TitleProps) {
  return (
    <>
      <h2
        className={twMerge(
          "text-xl font-semibold flex items-center",
          className,
        )}
      >
        {children}
      </h2>
    </>
  );
}
