'use client';

export default function FeatureSlider() {
  const features = [
    'Spatial Audio',
    'Auto EQ',
    'Bluetooth 5.3',
    'Voice Assistant',
    'Fast Charging',
    'Sweat Resistant',
    'Dual Device Pairing',
    'Smart Touch Sensor',
  ];

  return (
    <section className="overflow-x-auto whitespace-nowrap py-12 px-6 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-red-500 text-center tracking-tight">
        Cutting-Edge Tech
      </h2>

      <div className="flex space-x-6 md:space-x-8 pb-4">
        {features.map((item, i) => (
          <div
            key={i}
            className="min-w-[220px] h-[140px] bg-gray-900 text-red-400 border border-red-600 shadow-lg hover:shadow-red-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center rounded-2xl text-lg font-bold"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
