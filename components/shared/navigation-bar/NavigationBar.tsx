"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/bg/logo-2.png";

export default function NavigationBar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-10">

      <div className="h-16 flex items-center justify-between px-4 md:px-6 w-full absolute">
        <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between">

          <Link href="/" className="text-lg font-bold text-blue-950 flex items-center gap-2">
            <Image src={logo} alt="Dental Appointment App" width={36} height={36} />
            Dental Appointment App
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/home" className="text-lg font-bold text-blue-950/75 hover:text-blue-950 transition-colors">
              Home
            </Link>

            <Link href="/about" className="text-lg font-bold text-blue-950/75 hover:text-blue-950 transition-colors">
              About
            </Link>

            <Link href="/contact" className="text-lg font-bold text-blue-950/75 hover:text-blue-950 transition-colors">
              Contact
            </Link>
            
          </div>

          <div className="hidden md:flex items-center gap-2">

            <Link href="/sign-in" className="text-md px-4 py-2 rounded-md text-blue-950 hover:bg-blue-50 transition-colors">
              Login
            </Link>

            <Link href="/sign-up" className="text-md px-4 py-2 rounded-md bg-blue-950 text-white hover:bg-blue-900 transition-colors">
              Sign up
            </Link>

          </div>

          <button className="md:hidden p-1.5 text-blue-950 cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-250 ease-in-out bg-white ${isOpen ? "max-h-64 py-2" : "max-h-0"}`}>
        
        <div className="flex flex-col mt-16 px-4 gap-1">

          <Link href="/about" onClick={() => setIsOpen(false)} className="py-2.5 text-lg font-bold text-blue-950/80 hover:text-blue-950">
            About
          </Link>

          <Link href="/contact" onClick={() => setIsOpen(false)} className="py-2.5 text-lg font-bold text-blue-950/80 hover:text-blue-950">
            Contact
          </Link>

          <div className="flex gap-2 py-2">
            <Link href="/login" className="flex-1 text-center text-lg py-2 rounded-md text-blue-950">
              Login
            </Link>
            
            <Link href="/signup" className="flex-1 text-center text-lg py-2 rounded-md bg-blue-950 text-white">
              Sign up
            </Link>
          </div>

        </div>

      </div>
    </nav>
  );
}
