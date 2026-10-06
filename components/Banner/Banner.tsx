import { banner } from "@/constants";
import Container from "../Container/Container";
import Image from "next/image";
import Button from "../Button/Button";
import { GoArrowRight } from "react-icons/go";

export default function Banner() {
  return (
    <div className="bg-[#115061] text-brand-themeWhite py-20">
      <Container className="flex flex-col gap-5 md:flex-row md:items-center justify-between">
        <div className="flex flex-col gap-2 md:gap-5">
          <p className="text-base font-semibold">{banner?.priceText}</p>
          <h2 className="text-3xl md:text-5xl font-bold max-w-125">
            {banner?.title}
          </h2>
          <p className="text-lg font-bold">
            {banner?.textOne}{" "}
            <span className="text-brand-lightYellow mx-1">
              {banner?.offerPrice}
            </span>
            {banner?.textTwo}
          </p>
          <Button
            href={banner?.buttonLink}
            className="flex items-center gap-1 text-black rounded-md w-32 px-0 justify-center text-sm font-semibold hover:bg-transparent hover:text-brand-themeWhite py-2 border border-transparent bg-brand-themeWhite hover:border-white/40 duration-200"
          >
            Shop Now <GoArrowRight className="text-lg" />
          </Button>
        </div>
        <Image src={banner?.image} alt="banner image" priority={true} />
      </Container>
    </div>
  );
}
