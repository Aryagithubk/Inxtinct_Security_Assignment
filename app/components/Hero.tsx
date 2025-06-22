'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4 bg-black text-white">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-red-500 tracking-tight"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        EchoOne
      </motion.h1>

      <motion.p
        className="mt-4 text-xl md:text-2xl text-gray-300 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Sound. Reinvented.
      </motion.p>

      <motion.button
        onClick={() => router.push('/products')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-8 py-3 rounded-full bg-red-600 text-white font-semibold text-lg shadow-lg hover:bg-red-700 transition-all duration-300"
      >
        Discover More
      </motion.button>
    </div>
  );
}
