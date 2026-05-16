"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/images/bg/logo-2.png";
import { X, Menu } from "lucide-react";

export default function MenuBar({ auth }: { auth: React.ReactNode }) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`h-16 w-full flex items-center px-4 ${isOpen ? "bg-white" : "bg-transparent"}`}>

        <Link href="/" className="text-black text-lg font-bold flex items-center gap-2 mr-8">
          <Image src={logo} alt="Dental Appointment App" width={40} height={40}/>
            Dental Appointment App
        </Link>

        <div className="hidden md:flex flex-row items-center justify-center gap-4 flex-1">

          <Link href="/" onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">
            Home
          </Link>

          <Link href="/about" onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">
            About
          </Link>

          <Link href="/contact" onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">
            Contact
          </Link>

        </div>

        <div className="hidden md:flex items-center">{auth}</div>

        <button className="md:hidden ml-auto p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

      </div>

      <div className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64" : "max-h-0"}`}>
        <div className="flex flex-col px-4 py-2 gap-1">

          <Link href="/" onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">
            Home
          </Link>

          <Link href="/about" onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">
            About
          </Link>

          <Link href="/contact" onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">
            Contact
          </Link>

          <div className="border-t pt-3 mt-1 flex items-center justify-center">
            {auth}
          </div>
        </div>
      </div>
    </>
  );
}
