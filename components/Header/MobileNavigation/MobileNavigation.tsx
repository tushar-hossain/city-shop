"use client";
import SocialLink from "@/components/SocialLink/SocialLink";
import { navigation } from "@/constants";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { RiMenuFill } from "react-icons/ri";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="text-2xl text-gray-500 md:hidden hover:text-brand-themeColor duration-200 cursor-pointer"
      >
        <RiMenuFill />
      </div>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 md:hidden text-white/80"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/90">
          <DialogPanel
            transition
            className="w-[94%] space-y-4 p-6 border border-lightText rounded-md absolute top-10 bg-black m-5"
          >
            <div className="flex items-center justify-between gap-5">
              <h3 className="text-xl font-semibold">Navigation</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-red-600 duration-300 border border-white/20 rounded-sm hover:border-white/40 text-white/40 text-2x1 cursor-pointer"
              >
                <MdClose />
              </button>
            </div>
            <div className="flex flex-col gap-3 pt-5">
              {navigation?.map((item) => (
                <Link
                  onClick={() => setIsOpen(false)}
                  className="hover:text-brand-themeColor duration-200"
                  key={item?.title}
                  href={item?.href}
                >
                  {item?.title}
                </Link>
              ))}
            </div>
            <SocialLink />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
