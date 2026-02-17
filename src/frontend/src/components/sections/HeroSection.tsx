import { useRef } from 'react';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  useFadeInOnScroll(ref);

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-accent/20 px-4 fade-in-section"
    >
      <div className="text-center max-w-4xl">
        <h1 className="font-orbitron text-2xl md:text-3xl tracking-widest text-primary mb-4">
          AWS
        </h1>
        
        <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
          INNOVATOR'S SUMMIT
        </h2>
        
        <h3 className="font-orbitron text-3xl md:text-4xl tracking-wide text-accent-foreground mb-8">
          2026
        </h3>
        
        <p className="text-xl md:text-2xl text-foreground mb-4 font-light">
          Design · Develop · Deliver
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
          Shaping Intellectual Excellence in the Age of Technology
        </p>
        
        <p className="text-md md:text-lg text-muted-foreground mb-8">
          2–3 May 2026 | Academic World School
        </p>
      </div>
    </section>
  );
}
