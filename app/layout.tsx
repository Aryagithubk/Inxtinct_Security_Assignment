import './globals.css';
import { CartProvider } from './context/CartContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>EchoOne - Sound Reinvented</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-black text-black font-sans">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
