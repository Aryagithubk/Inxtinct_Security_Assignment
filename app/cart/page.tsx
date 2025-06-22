'use client';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { cart, updateQuantity } = useCart();
  const router = useRouter();

  const getPriceNumber = (price: string) =>
    Number(price.replace('$', ''));

  const total = cart.reduce(
    (sum, item) => sum + getPriceNumber(item.price) * item.quantity,
    0
  );

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 py-12 font-sans">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-red-500 tracking-tight">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-10">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-between border-b border-gray-700 pb-6"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
              />

              <div className="flex-1 mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                <h2 className="text-2xl font-semibold text-red-400">{item.name}</h2>
                <p className="text-gray-400 text-sm mt-1">{item.price}</p>
                <div className="flex justify-center sm:justify-start items-center gap-3 mt-4">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-xl font-bold text-white rounded-full shadow-sm transition-all"
                  >
                    –
                  </button>
                  <span className="w-8 text-lg text-white text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-xl font-bold text-white rounded-full shadow-sm transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-4 sm:mt-0 text-lg font-semibold text-red-300">
                ${(getPriceNumber(item.price) * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

          <div className="text-right mt-10">
            <h2 className="text-3xl font-extrabold text-red-500">
              Total: ${total.toFixed(2)}
            </h2>
            <button
              onClick={() => router.push('/payment')}
              className="mt-6 inline-block px-8 py-3 text-lg font-semibold rounded-md bg-red-600 hover:bg-red-700 hover:shadow-lg transition-all"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
