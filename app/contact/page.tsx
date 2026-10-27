import ContactForm from "@/components/Contact/ContactForm/ContactForm";
import Container from "@/components/Container/Container";
import SocialLink from "@/components/SocialLink/SocialLink";
import Title from "@/components/Title/Title";
import type { Metadata } from "next";
import Link from "next/link";
import { BsEnvelopeAt } from "react-icons/bs";
import { FiClock, FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

export const metadata: Metadata = {
  title: "Contact | City Shop",
};

const contactInfo = [
  {
    icon: <FiPhone />,
    label: "Call Us",
    value: "+880 1943 715753",
    href: "tel:+8801943715753",
  },
  {
    icon: <BsEnvelopeAt />,
    label: "Email Us",
    value: "cityshop@suppert.com",
    href: "mailto:cityshop@suppert.com",
  },
  { icon: <GrLocation />, label: "Visit Us", value: "Dhaka, Bangladesh" },
  { icon: <FiClock />, label: "Working Hours", value: "Sat – Thu, 9am – 9pm" },
];

export default function Contact() {
  return (
    <Container className="py-10">
      {/* heading */}
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">Get in Touch</h1>
        <p className="mt-3 text-brand-lightText">
          Have a question about an order or a product? Send us a message and
          our team will get back to you as soon as possible.
        </p>
        <div className="mt-4 text-xs flex items-center justify-center gap-2">
          <Link href="/" className="text-brand-lightText hover:text-brand-themeColor">
            Home
          </Link>
          <span className="text-brand-lightText">/</span>
          <span className="font-medium">Contact</span>
        </div>
      </div>

      {/* info cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {contactInfo.map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-lg shadow-md p-5 flex items-center gap-4"
          >
            <span className="w-12 h-12 shrink-0 rounded-full bg-brand-skyColor/10 text-brand-skyColor text-xl flex items-center justify-center">
              {item.icon}
            </span>
            <div className="min-w-0">
              <p className="text-sm text-brand-lightText">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="font-semibold break-all hover:text-brand-skyColor duration-200"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-semibold">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* form + map */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        <div className="lg:col-span-2 flex flex-col gap-5">
          <iframe
            title="City Shop location"
            src="https://maps.google.com/maps?q=Dhaka,Bangladesh&output=embed"
            loading="lazy"
            className="w-full h-72 lg:h-80 rounded-lg shadow-md border-0"
          />
          <div className="bg-white rounded-lg shadow-md p-6">
            <Title>Follow Us</Title>
            <p className="mt-2 text-sm text-brand-lightText">
              Stay updated with our latest offers and products.
            </p>
            <SocialLink iconStyle="bg-brand-themeWhite border border-brand-themeColor shadow-md text-black p-3 text-lg hover:bg-brand-themeColor hover:text-brand-themeWhite cursor-pointer duration-200 rounded-md" />
          </div>
        </div>
      </div>
    </Container>
  );
}
