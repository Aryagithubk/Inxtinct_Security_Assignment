'use client';
import { useState } from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) return setError(true);
    setError(false);
    setSubmitted(true);
  };

  return (
    <section className="text-center px-4 pb-16 bg-black text-white">
      <h2 className="text-3xl font-extrabold text-red-500 mb-6">Stay Updated</h2>

      {submitted ? (
        <p className="text-green-500 text-lg font-semibold">Thanks for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 w-72 sm:w-80 bg-white text-black border border-red-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className="text-red-400 text-sm">Please enter a valid email.</p>}

          <button
            type="submit"
            className="bg-red-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
}
