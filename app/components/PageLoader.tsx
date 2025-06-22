'use client';
import { motion } from 'framer-motion';

export default function PageLoader() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black text-white">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="text-4xl md:text-5xl font-extrabold text-red-500 tracking-wide animate-pulse"
      >
        Loading <span className="text-white">EchoOne</span>...
      </motion.h1>
    </div>
  );
}
