import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export default function SocialLink({
  className,
  iconStyle,
}: {
  className?: string;
  iconStyle?: string;
}) {
  const linksData = [
    { icon: <FaGithub />, href: "https://github.com/tushar-hossain" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/" },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/tushar-hossain-dev",
    },
  ];
  return (
    <div
      className={twMerge(
        "flex items-center flex-wrap py-2 text-white/50 gap-x-2",
        className,
      )}
    >
      {linksData?.map((social, index) => (
        <Link
          className={twMerge(
            "border border-white/20 rounded-full inline-flex p-2 hover:text-brand-skyColor hover:border-brand-skyColor duration-300 cursor-pointer",
            iconStyle,
          )}
          key={index}
          href={social?.href}
          target="_blank"
        >
          {social?.icon}
        </Link>
      ))}
    </div>
  );
}
