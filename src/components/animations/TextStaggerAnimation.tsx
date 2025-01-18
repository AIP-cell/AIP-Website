// 'use client';
// import { motion } from 'framer-motion';
// // import { useEffect, useState } from 'react';
// type Props = {
//     text: any;
//     className?: string;
// };
// const TextStaggerAnimation = ({ text, className }: Props) => {
//     const variants = {
//         initial: {
//             opacity: 0,
//             y: 20,
//         },
//         animate: {
//             opacity: 1,
//             y: 0,
//         },
//     };

//     return (
//         <motion.div
//             initial="initial"
//             // animate={animationReady ? 'animate' : 'initial'}
//             transition={{ delay: 0.05, staggerChildren: 0.1 }}
//             whileInView="animate"
//             viewport={{ once: true }}
//             className={`${className}`}
//         >
//             {text.split(' ').map((char: any, i: any) => (
//                 <motion.div key={i} variants={variants}>
//                     <span> {char}&nbsp;</span>
//                 </motion.div>
//             ))}
//         </motion.div>
//     );
// };

// export default TextStaggerAnimation;
