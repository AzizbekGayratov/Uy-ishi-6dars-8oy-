import React from "react";
import Hero from "@/components/Hero";
import HomeCorousel from "@/components/HomeCorousel";
import TitleComponent from "@/components/TitleComponent";
import Offer from "@/components/Offer";
import Customers from "@/components/Customers";
import ServiceCard from "@/components/ServiceCard";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeCorousel />
      <section className="py-[120px]">
        <div className="container">
          <TitleComponent
            subTitle={"WHAT WE OFFER"}
            title={"Agile focused business services and more."}
          />
          <div className="mt-[56px]">
            <Offer count={5} />
          </div>
        </div>
      </section>
      <section className="pb-[120px]">
        <div className="container">
          <TitleComponent
            subTitle={"OUT CUSTOMERS"}
            title={"Agile focused business services and more."}
          />
          <div className="mt-[40px]">
            <Customers count={7} />
          </div>
        </div>
      </section>
      <section className="pb-[120px]">
        <div className="container">
          <div className="max-w-[630px] mx-auto text-center">
            <TitleComponent
              subTitle={"SERVICES"}
              title={"We provide or a huge list of services."}
            />
          </div>
          <div className="mt-[50px]">
            <ServiceCard count={3} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
