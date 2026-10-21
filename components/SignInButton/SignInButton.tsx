"use client";
import { LiaUser } from "react-icons/lia";
import HeaderIcons from "../Header/HeadersIcon/HeaderIcons";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function SignInButton() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      {session?.user ? (
        <div className="hidden md:inline-flex items-center gap-4">
          {/* user */}
          <div
            onClick={() => signOut()}
            className="flex items-center gap-2 text-sm cursor-pointer"
          >
            <div className="border border-gray-500 rounded-full w-10 h-10">
              <Image
                src={session.user.image!}
                alt="user image"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <p className="text-xs">{session?.user.name}</p>
              <p className="text-md font-medium">Logout</p>
            </div>
          </div>
          {/* header icon */}
          <HeaderIcons />
        </div>
      ) : (
        <div className="hidden md:inline-flex items-center gap-4">
          {/* user */}
          <div
            onClick={() => signIn()}
            className="flex items-center gap-2 text-sm cursor-pointer"
          >
            <div className="border border-gray-700 rounded-full p-1.5 text-xl">
              <LiaUser />
            </div>
            <div>
              <p className="text-xs">Hello, Guests</p>
              <p className="text-md font-medium">Login / Register</p>
            </div>
          </div>
          {/* header icon */}
          <HeaderIcons />
        </div>
      )}
    </>
  );
}
