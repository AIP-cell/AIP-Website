// 'use client';

// import cn from '@/utils/tailwind';
// import { Disclosure } from '@headlessui/react';


// const FaqItem = (props: any) => {
//     return (
//         <div className="mb-[1rem] border-[1.5px] border-global-color-text-black bg-white p-[1.25rem] md:mb-[1.87rem] md:p-[2.5rem]">
//             <Disclosure>
//                 {({ open }) => (
//                     <>
//                         <Disclosure.Button className="flex w-full items-center justify-between text-left text-global-font-sm-headline7 font-medium text-global-color-text-black md:text-global-font-headline6">
//                             <span>{props.data?.question}</span>
//                             <div className="relative h-[30px] w-[30px]">
//                                 <div
//                                     className={cn(
//                                         'absolute top-[50%] h-[2px] w-[30px] transform bg-black transition-all',
//                                         {
//                                             'rotate-90': open,
//                                         },
//                                     )}
//                                 ></div>
//                                 <div
//                                     className={cn(
//                                         'invisible absolute top-[50%] h-[2px] w-[30px] transform bg-black transition-all',
//                                         {
//                                             'visible rotate-180': open,
//                                         },
//                                     )}
//                                 ></div>
//                             </div>
//                         </Disclosure.Button>
//                         <Disclosure.Panel className="max-w-[90ch] pt-[0.5rem] text-global-font-sub-sm-text6 text-global-color-text-black text-opacity-60 transition-all md:pt-[1rem] md:text-global-font-sub-text5">
//                             {props.data?.answer}
//                         </Disclosure.Panel>
//                     </>
//                 )}
//             </Disclosure>
//         </div>
//     );
// };

// export default FaqItem;