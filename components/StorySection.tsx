'use client';

import { useState } from 'react';
import { siteContent } from '@/lib/content';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function StorySection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useIntersectionObserver(() => setIsVisible(true));

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50 to-pink-50" />
      
      {/* Decorative circles */}
      <div className="absolute top-10 right-5 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse-scale" />
      <div className="absolute bottom-10 left-5 w-52 h-52 bg-rose-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse-scale animation-delay-1" />

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent mb-4 text-center">
          Our First Date
        </h2>
        <p className="text-center text-rose-600 mb-12 text-lg">Moments that changed everything</p>
        
        <div className="space-y-6">
          {siteContent.moments.map((moment, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-300 to-pink-300 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative p-8 rounded-xl bg-white border border-rose-200 hover:border-pink-300 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 flex items-center justify-center flex-shrink-0 animate-pulse-scale">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed pt-1">
                    "{moment}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
