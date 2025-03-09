import { motion } from 'framer-motion';
import { JSX } from 'react';

export default function AnimatePage({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <motion.div
      className="relative flex flex-col grow"
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
