'use client';

import { useState } from 'react';
import { siteContent } from '@/lib/content';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function StorySection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useIntersectionObserver(() => setIsVisible(true));

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-12 text-center">
          Our First Date
        </h2>
        <div className="grid gap-6">
          {siteContent.moments.map((moment, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 rounded-lg border-2 border-rose-200 bg-rose-50 transition-all duration-700 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              <p className="text-lg md:text-xl text-rose-800 leading-relaxed">
                "{moment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
