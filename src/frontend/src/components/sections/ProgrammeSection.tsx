import { useRef } from 'react';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

export default function ProgrammeSection() {
  const ref = useRef<HTMLElement>(null);
  useFadeInOnScroll(ref);

  const days = [
    {
      title: 'Day 1 – Inauguration & Foundation of Innovation',
      description: [
        'The summit begins with participant registration, welcome kit distribution, and an inaugural ceremony led by distinguished guests and school leadership. The opening session will introduce the theme "Design · Develop · Deliver" and outline the objectives of the summit.',
        'Participants will engage in orientation sessions, team formation activities, and networking opportunities. Introductory workshops on robotics fundamentals, artificial intelligence basics, and innovation frameworks will set the foundation for the next two days.',
      ],
    },
    {
      title: 'Day 2 – Technical Workshops & Competitive Events',
      description: [
        'The second day focuses on intensive hands-on workshops and competitive challenges. Students will participate in robotics building sessions, coding challenges, AI model demonstrations, and real-time problem-solving activities.',
        'Expert mentors will guide participants through advanced concepts such as automation systems, sensor integration, design thinking methodologies, and innovation strategy. Interactive panel discussions will provide insight into future career pathways in technology and entrepreneurship.',
      ],
    },
    {
      title: 'Day 3 – Project Showcase & Grand Finale',
      description: [
        'The final day will feature project presentations, prototype demonstrations, and evaluation by an expert jury panel. Teams will present their innovations, explain their problem statements, and demonstrate technical implementation.',
        'The summit concludes with an awards ceremony recognizing excellence in innovation, creativity, teamwork, and technical performance. Certificates and recognitions will be distributed, celebrating the achievements of all participating institutions.',
      ],
    },
  ];

  return (
    <section ref={ref} id="programme" className="py-20 px-4 fade-in-section">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
          Programme Overview
        </h2>
        
        <div className="space-y-6">
          {days.map((day, index) => (
            <div
              key={index}
              className="bg-secondary border-l-4 border-primary p-6 rounded-r-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">{day.title}</h3>
              <div className="space-y-4">
                {day.description.map((paragraph, idx) => (
                  <p key={idx} className="text-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
