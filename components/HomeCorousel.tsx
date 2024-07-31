import React from "react";
import Image from "next/image";

const HomeCorousel = () => {
  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="carousel w-full">
        <div className="carousel-item w-full">
          <Image
            src="/hero1.jpg"
            alt="corousel1"
            width={1440}
            height={600}
            className="w-full"
          />
        </div>
        <div className="carousel-item w-full">
          <Image
            src="/hero2.jpg"
            alt="corousel1"
            width={1440}
            height={600}
            className="w-full"
          />
        </div>
        <div className="carousel-item w-full">
          <Image
            src="/hero3.jpg"
            alt="corousel1"
            width={1440}
            height={600}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeCorousel;
