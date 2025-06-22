'use client';

import { useCart } from '../context/CartContext';
import Image from 'next/image';

export default function PaymentPage() {
  const { cart } = useCart();

  const getPriceNumber = (price: string) =>
    Number(price.replace('$', ''));

  const total = cart.reduce(
    (sum, item) => sum + getPriceNumber(item.price) * item.quantity,
    0
  );

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 bg-black text-white">
      <h1 className="text-3xl font-extrabold text-red-500 mb-8">Scan to Pay</h1>

      <div className="bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-md text-center border border-red-500">
        <Image
          src="/assets/images/qr-code.jpeg"
          alt="QR Code"
          width={200}
          height={200}
          className="mx-auto"
        />

        <p className="mt-6 text-xl font-semibold">
          Total: <span className="text-red-400">${total.toFixed(2)}</span>
        </p>

        <button
          onClick={() => alert('✅ Payment Successful!')}
          className="mt-6 w-full px-6 py-2 bg-red-600 hover:bg-red-700 transition text-white font-bold rounded-md"
        >
          Mark as Paid
        </button>
      </div>
    </section>
  );
}
