"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import Link from "next/link";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import DownTagSvg from "@/components/svg/DownTagSvg";
import ModalSvg from "@/components/svg/ModalSvg";
import CloseSvg from "@/components/svg/CloseSvg";
import Image from "next/image";
import love from "../../../public/images/love-to-give.png";
const Disclaimer = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAgreed = sessionStorage.getItem("disclaimerAgreed") === "true";

    if (!hasAgreed) {
      setIsOpen(true);
    }
  }, []);

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-[100000] focus:outline-none"
      onClose={() => setIsOpen(false)}
    >
      <div className="fixed bg-black/20 backdrop-blur-sm inset-0 z-50 overflow-y-auto">
        <div className="md:flex md:min-h-full items-center justify-center  md:~px-[0]/[3rem]">
          <DialogPanel
            transition
            className="w-full ~rounded-[0]/[1.75rem] max-w-[51.25rem] relative max-md:h-[100svh] max-md:flex max-md:flex-col max-md:grow max-md:shrink-0  md:min-h-fit bg-[#FFFDF7]   duration-300 ease-out data-closed:transform-[scale(50%)] data-closed:opacity-0"
          >
            <CloseSvg
              onClick={() => setIsOpen(false)}
              className="~size-[1.25rem]/[1.5rem] z-[50] shrink-0 absolute cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out right-[1.5rem] top-[1.5rem] "
            />
            <Link
              onClick={() => setIsOpen(false)}
              href={"/resource-center/books/love-to-give"}
              className="overflow-y-auto flex md:flex-row flex-col-reverse justify-center gap-[1rem] items-center grow no-scrollbar ~p-[1.5rem]/[3.9375rem]"
            >
              <div className="md:w-[65%] shrink-0">
                <WordStaggerAnimation
                  text="AIP brings you <br>
    Rashmi Bansal's <br>
    latest book,<br>
     <color>'Live to Give' <br> 
    "
                  className=" relative tracking-[-1px] shrink-0 w-auto z-[1000] ~text-[1.75rem]/h1 font-playFair ~leading-[2.6rem]/[3.1rem]  text-gray80"
                />
                <WordStaggerAnimation
                  text="with 16 inspiring stories 
    of Wealth with Purpose
    "
                  className=" relative tracking-[-1px] pt-2 shrink-0 w-auto z-[1000] font-playFair ~text-[1.5rem]/h3 ~leading-[2.6rem]/[3.3rem]    text-gray80"
                />
                <Link
                  onClick={() => setIsOpen(false)}
                  href={`https://www.amazon.in/`}
                  target="_blank"
                  className="~pt-[1rem]/[2.8125rem] block"
                >
                  <ButtonAnimation className=" z-30 bg-darkPurple border border-darkPurple  hover:bg-transparent text-white hover:text-darkPurple rounded-full transition-all duration-500 ">
                    <p
                      className={`~px-[1rem]/[2rem] flex gap-[1rem] items-center ~py-[0.625rem]/[0.75rem] ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]`}
                    >
                      Know More{" "}
                      <DownTagSvg className="w-[0.6rem] rotate-[-90deg] h-[0.4rem]" />
                    </p>
                  </ButtonAnimation>
                </Link>
              </div>
              <div className=" relative flex justify-center w-full z-10">
                <Image
                  src={love}
                  alt="love"
                  className="object-contain ~p-[1.5rem]/[0]"
                />
              </div>
            </Link>

            <ModalSvg className=" absolute  md:flex hidden bottom-0 right-0 w-[21.0625rem]" />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Disclaimer;
