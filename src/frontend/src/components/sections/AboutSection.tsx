import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  useFadeInOnScroll(ref);

  return (
    <section ref={ref} id="about" className="py-20 px-4 fade-in-section">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
          About the Summit
        </h2>
        
        <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow mb-8">
          <CardContent className="p-8">
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              AWS Innovator's Summit 2026 is a prestigious three-day national-level technology conclave dedicated to innovation, robotics, artificial intelligence, and future-ready skills. The summit aims to bring together young innovators, educators, industry experts, and technology enthusiasts under one platform to explore emerging trends and practical applications of modern technology.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              This summit is designed to foster creativity, critical thinking, collaboration, and problem-solving abilities among students. Participants will gain exposure to real-world technological challenges, interact with experts, and experience hands-on learning through structured workshops and competitive events.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed">
              The core objective of the summit is to encourage schools to adopt innovation-driven learning and empower students to become creators rather than just consumers of technology. Through robotics demonstrations, AI discussions, design thinking activities, and project showcases, AWS Innovator's Summit 2026 aims to shape the next generation of leaders in science and technology.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-card shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-card-foreground text-lg">
                To create a culture of innovation and technological excellence among young minds.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-card-foreground text-lg">
                To provide a national platform where students can design, develop, and deliver impactful technological solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
