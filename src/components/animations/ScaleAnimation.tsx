'use client'

import { motion } from 'framer-motion';
type Props={
    children: React.ReactNode;
    className?: string;
    onClick?: ()=>void;
}
const ScaleAnimation = ({children,className,onClick}:Props) => {
  return (
    <motion.div
    whileHover={{ scale: 1.05 }}
    className={`${className}`}
    onClick={onClick} 
    >{children}</motion.div>
  )
}

export default ScaleAnimation