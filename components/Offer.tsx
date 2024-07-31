import Image from "next/image";
import React from "react";

const Offer = ({ count }: { count: number }) => {
  return (
    <div className="carousel w-full">
      {new Array(count).fill(0).map((_, index) => (
        <div className="carousel-item w-1/2" key={index}>
          <div className="mx-[20px]">
            <Image
              src="/offer.jpg"
              alt="img"
              width={560}
              height={420}
              className="inline-block"
            />
            <h5 className="mt-[30px] mb-[8px] text-[20px] font-semibold leading-[24px]">
              Lorem ipsum dolor
            </h5>
            <p className="text-[21px] leading-[36px] mb-[16px]">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
            <span className="text-[20px] font-semibold leading-[24px] hover:text-indigo underline cursor-pointer transition-all">
              Browse
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offer;
