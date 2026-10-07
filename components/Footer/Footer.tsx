import Image from "next/image";
import Container from "../Container/Container";
import { Logo } from "@/public/assets/Image";
import Link from "next/link";
import SocialLink from "../SocialLink/SocialLink";
import Title from "../Title/Title";
import { navigation } from "@/constants";
import { BsEnvelopeAt } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

export default function Footer() {
  return (
    <div className="bg-brand-lightBg py-10 lg:py-20">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="flex flex-col gap-y-3">
          <Link href={"/"}>
            <Image
              priority={true}
              src={Logo}
              alt="logo"
              width={70}
              height={70}
            />
          </Link>
          <p>
            We are a team of designers and developers that create high quality
            WordPress
          </p>
          <SocialLink iconStyle="bg-brand-themeWhite border border-brand-themeColor shadow-md text-black p-3 text-lg hover:bg-brand-themeColor hover:text-brand-themeWhite cursor-pointer duration-200 rounded-md" />
        </div>

        <div>
          <Title>My Account</Title>
          <div className="mt-3 flex flex-col gap-y-2">
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
        </div>

        <div>
          <Title>Information</Title>
          <div className="mt-3 flex flex-col gap-y-2">
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
        </div>

        <div>
          <Title>Talk to Us</Title>
          <div className="mt-3">
            <div>
              <p className="text-sm">Got Questions? Call us</p>
              <Title>+880 1943 715753</Title>
            </div>
            <div className="mt-3">
              <p className="text-base flex items-center gap-x-3 text-gray-600">
                <BsEnvelopeAt />
                cityshop@suppert.com
              </p>
              <p className="text-base flex items-center gap-x-3 text-gray-600">
                <GrLocation /> Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
