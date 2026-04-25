'use client';

import { useState } from 'react';
import { siteContent } from '@/lib/content';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Heart } from 'lucide-react';

export function ReasonSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useIntersectionObserver(() => setIsVisible(true));

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-12 text-center">
          Why Another Chance Matters
        </h2>
        <div className="grid gap-8 md:gap-10">
          {siteContent.reasons.map((reason, index) => (
            <div
              key={index}
              className={`flex gap-4 md:gap-6 transition-all duration-700 transform ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              <Heart className="w-8 h-8 md:w-10 md:h-10 text-rose-500 flex-shrink-0 mt-1" />
              <p className="text-lg md:text-xl text-rose-800 leading-relaxed">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
