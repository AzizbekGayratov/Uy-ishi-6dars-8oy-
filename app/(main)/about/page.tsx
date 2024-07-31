import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="py-[120px]">
      <div className="container">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[58px] font-bold leading-[70px] max-w-[700px] mb-[60px]">
            Agile focused business services and more.
          </h2>
          <p className="text-[21px] pl-[135px] leading-[36px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            semper varius eleifend. Sed ornare lectus ut dui auctor, vitae
            pulvinar risus euismod. Cras tellus nisl, imperdiet nec sollicitudin
            vitae, pellentesque vel mauris. Integer quis elementum sapien. Ut
            accumsan consectetur erat et rutrum. Mauris maximus tortor nec
            consectetur ultrices. Sed volutpat sem at leo sollicitudin dapibus.
            Donec tincidunt faucibus rutrum. Sed lacinia metus nec pellentesque
            ullamcorper. Nulla ultricies dolor vitae sapien ornare, in euismod
            tellus luctus. Integer id imperdiet eros. Praesent mollis cursus
            nisl non volutpat.
          </p>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto my-[40px]">
        <Image
          src="/about.jpg"
          alt="img"
          width={2000}
          height={1000}
          className="inline-block"
        />
      </div>
      <div className="container">
        <div className="max-w-[900px] mx-auto pl-[135px]">
          <p className="text-[21px] leading-[36px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            auctor, elit imperdiet feugiat sagittis, ante lorem finibus leo, in
            lobortis nulla felis ut tellus. Vivamus non congue magna. In quam
            erat, euismod ac est sit amet, elementum fringilla arcu. Nam rhoncus
            sed ipsum et facilisis. Vivamus bibendum vehicula magna, id finibus
            justo laoreet et. Nullam bibendum finibus cursus. Praesent quis
            venenatis augue, quis faucibus quam. Suspendisse potenti. Donec
            vehicula cursus leo, sit amet cursus lorem lacinia ac. Suspendisse
            cursus dui eu risus vestibulum dapibus. Cras scelerisque eget nulla
            eu aliquam. Maecenas tempor ipsum ac est dapibus, a faucibus lacus
            consectetur. Maecenas et tellus sed turpis cursus aliquam.{" "}
            <span className="mt-[24px] inline-block">
              {" "}
              Aliquam at fringilla libero. Pellentesque ut turpis commodo,
              mattis augue sit amet, vehicula nisi. Morbi faucibus est sagittis
              tincidunt auctor. Cras sed lobortis orci. In congue et mauris in
              accumsan. Phasellus vitae tempus tellus, quis tempor mi. Phasellus
              ullamcorper iaculis risus quis tempor. Praesent iaculis justo ut
              risus elementum, sed viverra mauris convallis.
            </span>
          </p>
          <div className="mt-[24px] flex items-center gap-[50px]">
            <div className="flex items-center gap-[16px]">
              <span className="inline-block text-[20px] font-semibold leading-[44px]">
                SHARE
              </span>
              <ol className="flex gap-[24px] items-center">
                <li>
                  <Image src="/twitter.svg" alt="img" width={23} height={23} />
                </li>
                <li>
                  <Image src="/In.svg" alt="img" width={23} height={23} />
                </li>
                <li>
                  <Image src="/facebook.svg" alt="img" width={23} height={23} />
                </li>
                <li>
                  <Image src="/dots.svg" alt="img" width={23} height={23} />
                </li>
              </ol>
            </div>
            <div className="flex items-center gap-[16px]">
              <span className="inline-block text-[20px] font-semibold leading-[44px]">
                PRINT
              </span>
              <Image src="/printer.svg" alt="img" width={23} height={23} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
