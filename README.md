# 🎧 EchoOne - Sound Reinvented

EchoOne is a premium product landing page and cart experience for a headphone brand. It is designed using **Next.js 15**, **Tailwind CSS 4**, and **Framer Motion**, featuring elegant animations, a dark red-black theme, and responsive layouts. It simulates a real shopping experience with a dynamic cart and a QR code payment screen.

---

## 🚀 Tech Stack

- **Next.js 15 (App Router)** — Modern routing, fast SSR, image optimization.
- **Tailwind CSS 4.1** — Utility-first styling, responsive design.
- **Framer Motion** — Smooth, performant animations.
- **TypeScript** — Static typing for maintainable code.
- **Context API** — Global state management for cart functionality.

---

## 🧠 Design Decisions

### 🎨 UI/UX
- **Theme**: Sleek **black & red** theme to emphasize a bold and futuristic product vibe.
- **Animations**: Framer Motion used for entry animations and hover effects to enhance engagement.
- **Responsive**: All components adapt to mobile, tablet, and desktop layouts using Tailwind breakpoints.
- **Typography**: Sans-serif font with extra-bold headers to draw attention to key content.

### 💡 Features
- 📦 Product display grid with hover animations.
- 🛒 Cart page with real-time quantity update and price calculation.
- ✅ Dummy QR code payment interface.
- 🌈 Dynamic color selector.
- 🔄 Feature slider with scrollable UI and hover feedback.
- 🧾 Clean and modular component structure.

---

## 📂 Project Structure

```

/app
├── components/        # UI components like Hero, Slider, etc.
├── context/           # CartContext for global cart state
├── assets/images/     # QR codes and product images
├── page.tsx           # Landing/Home page
├── layout.tsx         # Global wrapper with CartProvider
└── globals.css        # Tailwind base and utilities

````

---

## 🛠️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/echoone.git
   cd echoone
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit `http://localhost:3000`

---

## 📦 Deployment

Here you can find deployed link:

https://inxtinct-security-assignment.vercel.app/payment

---

```bash
npm run build
npm run start
```

---

## 🤝 Acknowledgments

* Icons, fonts and assets used are either free or built-in.
* Thanks to [Framer Motion](https://www.framer.com/motion/) and [Tailwind CSS](https://tailwindcss.com/) for powerful design tooling.

---

> Built with ❤️ using Next.js & Tailwind CSS.

```
