import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="my-[120px] max-w-[620px] mx-auto text-center">
          <h2 className="text-[64px] font-bold leading-[77px] mb-[16px]">
            Become a better business with us.
          </h2>
          <p className="text-[21px] leading-[36px] mb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            turpis tortor, ultricies ut justo eu.
          </p>
          <button className="bg-indigo border-[2px] border-indigo rounded-[150px] text-[20px] font-semibold leading-[24px] text-[#f2f2f2] hover:bg-transparent hover:text-indigo transition-all">
            <Link href="/about" className="inline-block py-[18px] px-[67px]">
              Our Business
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
