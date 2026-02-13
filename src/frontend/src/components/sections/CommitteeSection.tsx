import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import { Phone, Mail } from 'lucide-react';

export default function CommitteeSection() {
  const ref = useRef<HTMLElement>(null);
  useFadeInOnScroll(ref);

  const members = [
    {
      name: 'Akshat Tiwari',
      role: 'Head & Managing Partner',
      phone: '+91 89826 04639',
      email: 'akshat.youthparliament.06@gmail.com',
    },
    {
      name: 'Jaydeep Sahu',
      role: 'Co-Head & Executive Managing Partner',
      phone: '+91 79996 15984',
      email: 'jaydeepsahu333@gmail.com',
    },
    {
      name: 'Bhavesh Kumar',
      role: 'ATL Incharge & Associate',
      phone: '+91 95756 47294',
      email: 'ogarebhaveshkumar21@gmail.com',
    },
  ];

  return (
    <section ref={ref} id="committee" className="py-20 px-4 fade-in-section">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
          Organizing Committee
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <Card
              key={index}
              className="bg-card shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{member.name}</CardTitle>
                <p className="text-muted-foreground">{member.role}</p>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center text-card-foreground">
                  <Phone className="w-4 h-4 mr-2 text-accent-foreground" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center text-card-foreground">
                  <Mail className="w-4 h-4 mr-2 text-accent-foreground" />
                  <a
                    href={`mailto:${member.email}`}
                    className="hover:text-primary transition-colors break-all"
                  >
                    {member.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
