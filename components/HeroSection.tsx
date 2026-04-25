'use client';

import { siteContent } from '@/lib/content';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-50 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold text-rose-900 mb-4 animate-fade-in">
          One More Chance
        </h1>
        <p className="text-xl md:text-2xl text-rose-700 mb-8 animate-fade-in animation-delay-1">
          A message from {siteContent.names.you} to {siteContent.names.her}
        </p>
        <p className="text-lg text-rose-600 max-w-xl mx-auto leading-relaxed animate-fade-in animation-delay-2">
          Sometimes the best things in life deserve a second chance. Sometimes people deserve a second chance.
        </p>
      </div>
    </section>
  );
}
