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
//               <DisclosureButton className="~tw-py-[1.25rem]/[1.75rem] tw-px-[1.25rem] tw-flex tw-justify-between tw-w-full">
//                 <div
//                   className={`tw-text-h6M tw-font-inter tw-text-left ${
//                     open ? "tw-text-textPurple" : "tw-text-gray80"
//                   }`}
//                 >
//                   {items.Q}
//                 </div>
//                 <div
//                   className={`tw-transform tw-size-5 tw-flex tw-justify-center tw-items-center tw-transition-all tw-duration-300  ${
//                     open ? "tw-rotate-180" : "tw-rotate-0"
//                   }`}
//                 >
//                   {open ? (
//                     <Image src={MinusSvg} alt="Minus Image" />
//                   ) : (
//                     <Image src={PlusSvg} alt="Plus Image" className="" />
//                   )}
//                 </div>
//               </DisclosureButton>
//               <DisclosurePanel className="tw-text-midGray tw-bg-bgGray5 tw-p-5  tw-rounded-t-[1.25rem] tw-font-inter tw-text-h9Copy5 tw-leading-[1.225rem]">
//                 {items.A}
//               </DisclosurePanel>
//               <div className="tw-h-px tw-bg-gray20"></div>
//             </>
//           )}
//         </Disclosure>
//       ))}
//     </>
//   );
// };

// export default FaqItem;
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const dummyArray = [
  {
    id:"one",
    Q: "What is the mission of our organization?",
    A: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla",
  },
  {
    id:"two",
    Q: "What is the mission of our organization?",
    A: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla",
  },
  {
    id:"three",
    Q: "What is the mission of our organization?",
    A: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla",
  },
];
export function FaqItem() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {dummyArray.map((items, i) => (
        <AccordionItem key={i} value={items.id}>
          <AccordionTrigger>{items.Q}</AccordionTrigger>
          <AccordionContent>{items.A}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
