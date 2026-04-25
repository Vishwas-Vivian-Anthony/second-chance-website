'use client';

import { useState } from 'react';
import { siteContent, whatsappLink } from '@/lib/content';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { MessageCircle } from 'lucide-react';

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useIntersectionObserver(() => setIsVisible(true));

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-rose-50 to-amber-50" />
      
      {/* Floating elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-scale" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-scale animation-delay-2" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-700 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent mb-6">
          Will You Give Me Another Chance?
        </h2>
        <p className="text-lg md:text-2xl text-gray-700 mb-4 leading-relaxed font-light">
          I know I messed up. But I want you to know that I&apos;m sorry, and I&apos;m ready to be better.
        </p>
        <p className="text-gray-600 mb-12 text-lg">Let&apos;s talk?</p>
        
        <div className={`transition-all duration-700 transform ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-6 md:px-12 md:py-7 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 group-hover:translate-x-full transition duration-500" />
            <MessageCircle className="w-7 h-7 relative z-10 group-hover:animate-pulse-scale" />
            <span className="relative z-10">Message on WhatsApp</span>
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-8 italic">
          Send me a message and let&apos;s start over. I promise to make it right.
        </p>
      </div>
    </section>
  );
}
