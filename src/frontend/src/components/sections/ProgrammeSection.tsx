import { useRef } from 'react';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

export default function ProgrammeSection() {
  const ref = useRef<HTMLElement>(null);
  useFadeInOnScroll(ref);

  const days = [
    {
      dayNumber: 'DAY 1',
      date: '1ST MAY 2026',
      weekday: 'FRIDAY',
      theme: 'Arrival & Ice-Breaking',
      schedule: [
        { time: '10:00 AM - 3:00 PM', activity: 'Arrival of Participating Schools' },
        { time: '3:00 PM - 4:00 PM', activity: 'Registration and Introduction' },
        { time: '4:00 PM - 4:25 PM', activity: 'Tea Break' },
        { time: '4:30 PM - 7:00 PM', activity: 'Ice-Breaking Activities' },
        { time: '7:30 PM - 8:15 PM', activity: 'Dinner' },
      ],
    },
    {
      dayNumber: 'DAY 2',
      date: '2ND MAY 2026',
      weekday: 'FRIDAY',
      theme: 'Hands-on Workshops on Robotics & AI',
      schedule: [
        { time: '8:00 AM - 9:00 AM', activity: 'Breakfast' },
        { time: '9:00 AM - 11:30 AM', activity: 'Opening Ceremony' },
        { time: '11:30 AM - 12:00 PM', activity: 'Tea Break' },
        { time: '12:00 PM - 1:00 PM', activity: 'Session 1st' },
        { time: '1:30 PM - 2:30 PM', activity: 'Lunch' },
        { time: '2:40 PM - 4:15 PM', activity: 'Session 2nd' },
        { time: '4:15 PM - 4:45 PM', activity: 'Tea Break' },
        { time: '4:45 PM - 6:00 PM', activity: 'Robotics & AI Workshops' },
        { time: '7:30 PM Onwards', activity: 'Principal\'s Dinner + Quiz Hunt' },
      ],
    },
    {
      dayNumber: 'DAY 3',
      date: '3RD MAY 2026',
      weekday: 'FRIDAY',
      theme: 'Design, Develop, Deliver',
      schedule: [
        { time: '8:00 AM - 9:00 AM', activity: 'Breakfast' },
        { time: '9:15 AM - 11:30 AM', activity: '\'Design, Develop, Deliver\' Session' },
        { time: '11:30 AM - 12:00 PM', activity: 'Tea Break' },
        { time: '12:00 PM - 1:00 PM', activity: '\'Design, Develop, Deliver\' Continues' },
        { time: '1:15 PM - 2:15 PM', activity: 'Lunch' },
        { time: '2:30 PM - 3:30 PM', activity: 'Presentation Setup' },
        { time: '3:45 PM - 5:30 PM', activity: 'Judgement of Presentations' },
        { time: '5:30 PM - 6:00 PM', activity: 'High Tea' },
        { time: '6:30 PM Onwards', activity: 'Prize Distribution & Closing Ceremony' },
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
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-primary">{day.dayNumber}</h3>
                <p className="text-lg font-semibold text-accent-foreground">
                  {day.date} · {day.weekday}
                </p>
                <p className="text-xl font-medium text-foreground mt-2">{day.theme}</p>
              </div>
              
              <div className="space-y-3 mt-4">
                {day.schedule.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:gap-4 border-l-2 border-accent/30 pl-4 py-2">
                    <span className="text-sm font-semibold text-accent-foreground min-w-[180px]">
                      {item.time}
                    </span>
                    <span className="text-foreground">
                      {item.activity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
