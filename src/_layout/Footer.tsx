import Image from "next/image";
import React from "react";
import FooterBg from "../../public/svg/footer/footerBg.svg";
import Logo from "../../public/svg/footer/footerLogo.svg";
import X from "../../public/svg/footer/x.svg";
import In from "../../public/svg/footer/in.svg";
import Youtube from "../../public/svg/footer/youtube.svg";
import FooterFish from "../../public/svg/footer/fish/footerFish.svg";
import Link from "next/link";
const footerLinks = [
  {
    name: "FAQ",
    link: "",
  },
  {
    name: "Fact Sheet",
    link: "",
  },
  {
    name: "Social Media",
    link: "",
  },
  {
    name: "Learning Circle",
    link: "",
  },
  {
    name: "T & C",
    link: "",
  },
  {
    name: "Copyright",
    link: "",
  },
];
const Footer = () => {
  return (
    <div className="">
      <div className="relative h-[34rem] w-full">
        {/* <div className="absolute   "> */}
        <Image src={FooterBg} alt="" fill className="inset-x-0 object-cover" />
        <div className="absolute w-[45.6rem] h-[10.3rem] bottom-0 right-0 z-50">
          <Image src={FooterFish} alt="" className="" fill />
        </div>
        {/* </div> */}
        <div className="flex container mx-auto relative">
          <div className="pt-[12.5rem] flex flex-wrap">
            <div className="basis-1/4 ">
              <div className="relative h-[3.6rem] w-[6rem]">
                <Image src={Logo} alt="" fill />
              </div>
            </div>
            <div className="basis-3/4 flex items-center justify-end">
              <div className=" flex gap-[1.75rem]">
                {footerLinks.map((items, i) => (
                  <Link
                    key={i}
                    href={items.link}
                    className="text-h9BodyCopy5 leading-[19.6px] font-inter text-white"
                  >
                    {items.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="basis-1/4 ">
              <h3 className="pt-[2rem] font-playFair leading-[22.4px] text-white">
                Accelerate Indian Philanthropy
              </h3>
              <p className="pt-[0.75rem] text-h9BodyCopy5 font-inter text-white/60">
                Ananda, 242 Okhla Industrial Estate Phase III, New Delhi, India
                110020 info@indianphilanthropy.org
              </p>
              <div className="flex gap-[1.25rem] pt-[2rem]">
                <div className="relative size-[2.5rem]">
                  <Image src={X} alt="" />
                </div>
                <div className="relative size-[2.5rem]">
                  <Image src={In} alt="" />
                </div>
                <div className="relative size-[2.5rem]">
                  <Image src={Youtube} alt="" />
                </div>
              </div>
            </div>
            <div className="basis-3/4 flex  justify-end pt-[2rem]">
              <div className="w-[25rem] h-[2.8rem]  flex rounded-full  relative   rounded-br-full   items-center justify-end">
                <div className="pr-[2.56rem] pl-[4rem] text-textPurple flex items-center justify-end bg-white  h-full rounded-full text-right text-h9BodyCopy5 font-inter">
                  Join
                </div>
                <div className="rounded-full bg-bgSlatePurple absolute top-0 left-0 z-[100] flex items-center border-2 border-footerGray pl-[1.5rem] pr-[6rem]  h-full ">
                  <h3 className="text-footerGray">
                    Sign up for our newsletter
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
