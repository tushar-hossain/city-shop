import Container from "@/components/Container/Container";
import { Logo } from "@/public/BannerImage/Image";
import Image from "next/image";
import SearchInput from "../SearchInput/SearchInput";

export default function MiddleHeader() {
  return (
    <div className="border-b border-b-gray-400">
      <Container className="flex items-center justify-between gap-4 md:gap-6 lg:gap-20">
        <Image src={Logo} alt="logo" width={80} height={80} />
        <SearchInput />
        <div>
          {/* user */}

          {/* header icon */}
        </div>
      </Container>
    </div>
  );
}
