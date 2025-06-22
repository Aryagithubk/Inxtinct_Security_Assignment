'use client';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import ColorSelector from  './components/ColorSelector';
import FeatureSlider from './components/FeatureSlider';
import PageLoader from './components/PageLoader';
import SubscribeForm from './components/SubscribeForm';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <main className="space-y-20 overflow-x-hidden">
      <Hero />
      <FeatureSection />
      <ColorSelector />
      <FeatureSlider />
      <SubscribeForm />
    </main>
  );
}