'use client';

import { siteContent } from '@/lib/content';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-rose-50 to-fuchsia-50" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-drift" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-drift animation-delay-1" />
      <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-drift animation-delay-2" />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-rose-400 rounded-full opacity-40 animate-float-up"
          style={{
            left: `${20 + i * 15}%`,
            top: '80%',
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative text-center max-w-3xl z-10">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-rose-700 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent mb-6 animate-fade-in drop-shadow-sm">
          One More Chance
        </h1>
        <div className="h-1 w-20 mx-auto bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mb-8 animate-fade-in animation-delay-1" />
        <p className="text-2xl md:text-3xl font-light text-rose-800 mb-8 animate-fade-in animation-delay-1">
          A message from <span className="font-semibold">{siteContent.names.you}</span> to <span className="font-semibold text-fuchsia-700">{siteContent.names.her}</span>
        </p>
        <p className="text-lg md:text-xl text-rose-700 max-w-xl mx-auto leading-relaxed animate-fade-in animation-delay-2">
          Sometimes the best things in life deserve a second chance. Sometimes <span className="text-fuchsia-600 font-medium">people</span> deserve a second chance.
        </p>
      </div>
    </section>
  );
}
