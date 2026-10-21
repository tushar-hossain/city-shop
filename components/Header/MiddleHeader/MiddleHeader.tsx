import Container from "@/components/Container/Container";
import Image from "next/image";
import SearchInput from "../SearchInput/SearchInput";
import Link from "next/link";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import { Logo } from "@/public/assets/Image";
import SignInButton from "@/components/SignInButton/SignInButton";

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
              loading="eager"
            />
          </Link>
          <SearchInput />
          <SignInButton />
          {/* mobile navigation */}
          <MobileNavigation />
        </Container>
      </div>
    </>
  );
}
