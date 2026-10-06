import Container from "@/components/Container/Container";
import { Logo } from "@/public/BannerImage/Image";
import Image from "next/image";
import SearchInput from "../SearchInput/SearchInput";
import Link from "next/link";
import { LiaUser } from "react-icons/lia";
import HeaderIcons from "../HeadersIcon/HeaderIcons";
import MobileNavigation from "../MobileNavigation/MobileNavigation";

export default function MiddleHeader() {
  return (
    <>
      <div className="border-b border-b-gray-400">
        <Container className="flex items-center justify-between gap-4 md:gap-6 lg:gap-20">
          <Link href="/">
            <Image
              priority={true}
              src={Logo}
              alt="logo"
              width={80}
              height={80}
            />
          </Link>
          <SearchInput />
          <div className="hidden md:inline-flex items-center gap-4">
            {/* user */}
            <Link className="flex items-center gap-2 text-sm" href="/signin">
              <div className="border border-gray-700 rounded-full p-1.5 text-xl">
                <LiaUser />
              </div>
              <div>
                <p className="text-xs">Hello, Guests</p>
                <p className="text-md font-medium">Login / Register</p>
              </div>
            </Link>
            {/* header icon */}
            <HeaderIcons />
          </div>
          {/* mobile navigation */}
          <MobileNavigation />
        </Container>
      </div>
    </>
  );
}
