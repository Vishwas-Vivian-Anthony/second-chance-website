'use client';

import { useState } from 'react';
import { siteContent, whatsappLink } from '@/lib/content';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { MessageCircle } from 'lucide-react';

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useIntersectionObserver(() => setIsVisible(true));

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
          Will You Give Me Another Chance?
        </h2>
        <p className="text-lg md:text-xl text-rose-700 mb-10 leading-relaxed">
          I know I messed up. But I want you to know that I&apos;m sorry, and I&apos;m ready to be better. Let&apos;s talk?
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            transitionDelay: isVisible ? '200ms' : '0ms',
          }}
        >
          <MessageCircle className="w-6 h-6" />
          Message on WhatsApp
        </a>
      </div>
    </section>
  );
}
