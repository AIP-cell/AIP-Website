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
  return (
    <div className="absolute ~w-[24.375rem]/[45.6rem] h-[10.3rem] bottom-0 ~right-[-5rem]/0 z-50">
      <Image src={fish} alt="" className="" fill />
    </div>
  );
};

export default FooterFishes;
