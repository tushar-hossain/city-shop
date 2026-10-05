import Container from "@/components/Container/Container";
import { navigation } from "@/constants";
import Link from "next/link";

export default function BottomHeader() {
  return (
    <div className="border-b border-gray-400">
      <Container className="flex items-center justify-between py-1">
        <div className="text-xs md:text-sm font-medium flex items-center gap-2 md:gap-4">
          {navigation?.map((item) => (
            <Link
              className="hover:text-brand-themeColor duration-200"
              key={item?.title}
              href={item?.href}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <p className="hidden md:inline-flex text-xs md:text-sm">
          <span className="text-gray-700">Hotline:</span>{" "}
          <span className="font-medium">+88 01012345678</span>
        </p>
      </Container>
    </div>
  );
}
