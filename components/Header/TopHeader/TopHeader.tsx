import Container from "@/components/Container/Container";
import { FaTruck } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";

export default function TopHeader() {
  return (
    <div className="bg-[#010f1c] text-gray-200">
      <Container className="flex items-center justify-between">
        <p className="w-full md:w-auto text-sm flex items-center justify-center mb:justify-normal font-medium py-1">
          <FaTruck className="text-[#ffb342] text-2xl mr-1" /> FREE Express
          Shipping On Orders $1000+
        </p>

        <div className="hidden md:inline-flex items-center text-sm text-white">
          <p className="headerTopMenu">
            english <IoChevronDownSharp />
          </p>
          <p className="headerTopMenu">
            USD <IoChevronDownSharp />
          </p>
        </div>
      </Container>
    </div>
  );
}
