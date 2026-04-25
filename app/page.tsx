import { HeroSection } from '@/components/HeroSection';
import { StorySection } from '@/components/StorySection';
import { ReasonSection } from '@/components/ReasonSection';
import { CTASection } from '@/components/CTASection';

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <StorySection />
      <ReasonSection />
      <CTASection />
    </main>
  );
}
