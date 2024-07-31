import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="pt-[70px] pb-[46px] bg-darkBg">
      <div className="container">
        <div className="flex justify-between items-start">
          <div className="max-w-[575px]">
            <h3 className="text-[58px] font-semibold leading-[70px] text-[#f2f2f2] mb-[11px]">
              Let’s start working to build a brighter future.
            </h3>
            <p className="text-[16px] leading-[28px] text-[#f2f2f2] mb-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              posuere eget elementum vulputate elementum viverra sapien tellus
              aenean.
            </p>
            <span className="text-[16px] font-bold leading-[21px] text-[#f2f2f2]">
              Fb In Tw Ln
            </span>
          </div>
          <form className="min-w-[450px] border-[1px] border-[#E0CFFC] flex justify-between">
            <input
              type="text"
              className="flex-grow px-[26px] py-[25px] bg-transparent outline-none text-[#f2f2f2] placeholder:text-[20px]"
              placeholder="Join our mailing list"
            />
            <button
              type="submit"
              className="text-[#f2f2f2] bg-transparent py-[25px] px-[32px]"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex items-center justify-between mt-[120px]">
          <Link href="/" className="inline-block">
            <Image src="/footer-logo.svg" alt="logo" width={200} height={40} />
          </Link>
          <p className="text-[14px] leading-[38px] text-[#f2f2f2]">
            Copyright 2021. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
