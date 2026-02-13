import { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import { appendToLocalStorage } from '@/utils/localStorageArrays';

export default function RegistrationSection() {
  const ref = useRef<HTMLElement>(null);
  useFadeInOnScroll(ref);

  const [formData, setFormData] = useState({
    schoolName: '',
    representativeName: '',
    representativeMobile: '',
    representativeEmail: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    appendToLocalStorage('registrations', formData);
    alert('Registration successful');
    setFormData({
      schoolName: '',
      representativeName: '',
      representativeMobile: '',
      representativeEmail: '',
    });
  };

  return (
    <section ref={ref} id="register" className="py-20 px-4 fade-in-section">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
          Registration
        </h2>
        
        <Card className="bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Register Your School</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="schoolName">School Name</Label>
                <Input
                  id="schoolName"
                  value={formData.schoolName}
                  onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="representativeName">Representative Name</Label>
                <Input
                  id="representativeName"
                  value={formData.representativeName}
                  onChange={(e) => setFormData({ ...formData, representativeName: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="representativeMobile">Representative Mobile No.</Label>
                <Input
                  id="representativeMobile"
                  type="tel"
                  value={formData.representativeMobile}
                  onChange={(e) => setFormData({ ...formData, representativeMobile: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="representativeEmail">Representative Email ID</Label>
                <Input
                  id="representativeEmail"
                  type="email"
                  value={formData.representativeEmail}
                  onChange={(e) => setFormData({ ...formData, representativeEmail: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
              >
                Submit Registration
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
