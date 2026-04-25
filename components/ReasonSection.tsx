'use client';

import { useState } from 'react';
import { siteContent } from '@/lib/content';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Heart } from 'lucide-react';

export function ReasonSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useIntersectionObserver(() => setIsVisible(true));

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-rose-50 to-pink-50" />
      
      {/* Animated decorative elements */}
      <div className="absolute top-5 left-10 w-32 h-32 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-drift" />
      <div className="absolute bottom-5 right-10 w-40 h-40 bg-rose-200 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-drift animation-delay-2" />

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent mb-4 text-center">
          Why Another Chance Matters
        </h2>
        <p className="text-center text-rose-600 mb-16 text-lg">Three promises, one heart</p>
        
        <div className="space-y-8">
          {siteContent.reasons.map((reason, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
              }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-300 via-pink-300 to-fuchsia-300 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative p-8 md:p-10 rounded-2xl bg-white border-2 border-rose-200 hover:border-pink-400 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 via-pink-400 to-fuchsia-400 flex items-center justify-center flex-shrink-0 animate-pulse-scale shadow-lg">
                      <Heart className="w-8 h-8 text-white fill-white" />
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed pt-2 font-light">
                      {reason}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
