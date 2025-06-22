'use client';
import { motion } from 'framer-motion';

export default function FeatureSection() {
  const features = [
    {
      title: 'Adaptive Noise Canceling',
      desc: 'Auto-tunes based on your surroundings.',
    },
    {
      title: '24hr Battery Life',
      desc: 'Long listening with fast USB-C charging.',
    },
    {
      title: 'Touch Controls',
      desc: 'Swipe, tap, and go. All on your ears.',
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-24">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-red-500 tracking-tight">
        Features That Impress
      </h2>

      <div className="space-y-12">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl p-6 shadow-xl hover:shadow-red-500/40 transition duration-300"
          >
            <h3 className="text-2xl font-bold mb-2 text-red-400">{f.title}</h3>
            <p className="text-gray-300 text-base">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
