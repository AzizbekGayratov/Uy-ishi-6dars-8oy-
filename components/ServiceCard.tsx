import Image from "next/image";
import React from "react";

const Customers = ({ count }: { count: number }) => {
  return (
    <div className="carousel w-full">
      {new Array(count).fill(0).map((_, index) => (
        <div className="carousel-item w-1/3" key={index}>
          <div className="mx-[36px] text-center">
            <div className="flex items-center justify-center mx-auto mb-[52px] w-[156px] h-[156px] bg-[#E0CFFC] rounded-full">
              <Image
                src="/service.svg"
                alt="img"
                width={59}
                height={59}
                className="inline-block"
              />
            </div>
            <div className="flex flex-col items-start gap-[22px]">
              <h5 className="mx-auto text-[20px] font-semibold leading-[24px]">
                Lorem ipsum dolor
              </h5>
              <p className="text-[16px] leading-[28px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                donec eu mattis tincidunt viverra eu. Lacus turpis felis
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Customers;
