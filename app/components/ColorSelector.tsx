'use client';
import { useState } from 'react';

export default function ColorSelector() {
  const colors = ['#000000', '#ffffff', '#ff3e00'];
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <section className="text-center px-4 py-12 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-red-500 tracking-tight">
        Choose Your Color
      </h2>

      <div className="flex justify-center gap-6 mb-8">
        {colors.map((color, i) => (
          <button
            key={i}
            className={`w-10 h-10 rounded-full border-2 transition-all duration-300 hover:scale-110 shadow-md ${
              selectedColor === color
                ? 'ring-4 ring-red-500'
                : 'border-gray-300'
            }`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
            aria-label={`Select color ${color}`}
          ></button>
        ))}
      </div>

      <div
        className="w-60 h-60 mx-auto rounded-full shadow-2xl border-4 border-white"
        style={{ backgroundColor: selectedColor }}
      ></div>
    </section>
  );
}
