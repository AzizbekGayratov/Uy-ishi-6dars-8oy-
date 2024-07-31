import Image from "next/image";
import React from "react";

const Customers = ({ count }: { count: number }) => {
  return (
    <div className="carousel w-full">
      {new Array(count).fill(0).map((_, index) => (
        <div className="carousel-item w-1/3" key={index}>
          <div className="mx-[20px]">
            <div className="relative mb-[24px]">
              <Image
                src="/customer.png"
                alt="img"
                width={165}
                height={165}
                className="inline-block"
              />
              <span className="absolute top-0 left-8 w-[165px] h-[165px] rounded-full bg-darkBg opacity-20"></span>
            </div>
            <div className="flex items-start gap-[30px]">
              <Image
                src="/customer-icon.svg"
                alt="star"
                width={48}
                height={48}
                className="inline-block"
              />
              <p className="text-[21px] font-medium leading-[36px]">
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
