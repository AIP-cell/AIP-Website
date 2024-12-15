// "use client";
// import React from "react";
// import Image from "next/image";
// import PlusSvg from "@public/svg/faq/plus.svg";
// import MinusSvg from "@public/svg/faq/minus.svg";

// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
// } from "@headlessui/react";
// // const faqData=[

// const dummyArray = [
//   {
//     Q: "What is the mission of our organization?",
//     A: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla",
//   },
//   {
//     Q: "What is the mission of our organization?",
//     A: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla",
//   },
//   {
//     Q: "What is the mission of our organization?",
//     A: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla",
//   },
// ];
// // ]
// const FaqItem = () => {
//   return (
//     <>
//       {dummyArray.map((items, i) => (
//         <Disclosure key={i}>
//           {({ open }) => (
//             <>
//               <DisclosureButton className="~py-[1.25rem]/[1.75rem] px-[1.25rem] flex justify-between w-full">
//                 <div
//                   className={`text-h6M font-inter text-left ${
//                     open ? "text-textPurple" : "text-gray80"
//                   }`}
//                 >
//                   {items.Q}
//                 </div>
//                 <div
//                   className={`transform size-5 flex justify-center items-center transition-all duration-300  ${
//                     open ? "rotate-180" : "rotate-0"
//                   }`}
//                 >
//                   {open ? (
//                     <Image src={MinusSvg} alt="Minus Image" />
//                   ) : (
//                     <Image src={PlusSvg} alt="Plus Image" className="" />
//                   )}
//                 </div>
//               </DisclosureButton>
//               <DisclosurePanel className="text-midGray bg-bgGray5 p-5  rounded-t-[1.25rem] font-inter text-h9Copy5 leading-[1.225rem]">
//                 {items.A}
//               </DisclosurePanel>
//               <div className="h-px bg-gray20"></div>
//             </>
//           )}
//         </Disclosure>
//       ))}
//     </>
//   );
// };

// export default FaqItem;
import { TFaqs } from "@/api/type";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const dummyArray = [
  {
    id: "one",
    Q: "What is the mission of our organization?",
    A: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla",
  },
  {
    id: "two",
    Q: "What is the mission of our organization?",
    A: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla",
  },
  {
    id: "three",
    Q: "What is the mission of our organization?",
    A: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla",
  },
];

type Props = { faqData: TFaqs[] };
export function FaqItem({ faqData }: Props) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqData.map((items, i) => (
        <AccordionItem key={i} value={items.question}>
          <AccordionTrigger>{items.question}</AccordionTrigger>
          <AccordionContent>{items.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
