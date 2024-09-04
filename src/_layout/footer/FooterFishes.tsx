"use client";
import React, { useState } from "react";
import FooterFish from "@public/svg/footer/fish/homePageFish.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const FooterFishes = () => {
  // const [fish,setFish] = useState()
  const pathname = usePathname();
  const productsAndServicesPath =
    pathname.startsWith("/products-and-services") ||
    pathname.startsWith("/careers");
  const aboutFish =
    pathname.startsWith("/about") || pathname.startsWith("/financials");
  // console.log("aboutFish:::", aboutFish);
  const contactFish = pathname.startsWith("/contact");
  const faqFish = pathname.startsWith("/faq");
  let fish: any;
  if (productsAndServicesPath) {
    fish = "/svg/footer/fish/productsAndServiveFish.svg";
  } else if (aboutFish) {
    fish = "/svg/footer/fish/aboutFish.svg";
  } else if (contactFish) {
    fish = "/svg/footer/fish/contactFish.svg";
  } else if (contactFish) {
    fish = "/svg/footer/fish/faqFish.svg";
  } else {
    fish = "/svg/footer/fish/homePageFish.svg";
  }
  console.log("fish:::::", fish);
  return (
    <div className="tw-absolute tw-w-[45.6rem] tw-h-[10.3rem] tw-bottom-0 tw-right-0 tw-z-50">
      <Image src={fish} alt="" className="" fill />
    </div>
  );
};

export default FooterFishes;
