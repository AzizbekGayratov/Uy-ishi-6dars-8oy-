"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };
  return (
    <header className="py-[20px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-block">
            <Image src="/logo.svg" alt="logo" width={200} height={40} />
          </Link>
          <div className="flex items-center gap-[30px]">
            <nav>
              <ul className="flex items-center gap-[50px]">
                <li className="text-[16px] font-semibold leading-[28px]">
                  <Link
                    href="/"
                    className={isActive("/") ? "underline text-indigo" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li className="text-[16px] font-semibold leading-[28px]">
                  <Link
                    href="/about"
                    className={
                      isActive("/about") ? "underline text-indigo" : ""
                    }
                  >
                    About
                  </Link>
                </li>
                <li className="text-[16px] font-semibold leading-[28px]">
                  <Link
                    href="/services"
                    className={
                      isActive("/services") ? "underline text-indigo" : ""
                    }
                  >
                    Services
                  </Link>
                </li>
                <li className="text-[16px] font-semibold leading-[28px]">
                  <Link
                    href="/systems"
                    className={
                      isActive("/systems") ? "underline text-indigo" : ""
                    }
                  >
                    Systems
                  </Link>
                </li>
              </ul>
            </nav>
            <a
              href="tel:+998712345678"
              className="inline-block text-indigo text-[16px] font-semibold leading-[28px] py-[15px] px-[33px] border-[2px] rounded-[150px] border-indigo hover:bg-indigo hover:text-[#fff] transition-all"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
