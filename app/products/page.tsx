'use client';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'EchoOne Pro',
    price: '$299',
    image: '/assets/images/echoone-black.jpg',
  },
  {
    id: 2,
    name: 'EchoOne Max',
    price: '$399',
    image: '/assets/images/echoone-white.webp',
  },
  {
    id: 3,
    name: 'EchoOne Lite',
    price: '$199',
    image: '/assets/images/echoone-orange.webp',
  },
];

export default function ProductPage() {
  const router = useRouter();
  const { addToCart } = useCart();

  return (
    <section className="px-6 py-12 bg-black text-white min-h-screen">
      <h1 className="text-4xl font-extrabold text-red-500 text-center mb-12">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900 border border-red-600 rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105 shadow-xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-xl font-bold text-red-400">{product.name}</h2>
            <p className="text-gray-300 mb-4">{product.price}</p>
            <button
              onClick={() => {
                addToCart(product);
                router.push('/cart');
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-md transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
