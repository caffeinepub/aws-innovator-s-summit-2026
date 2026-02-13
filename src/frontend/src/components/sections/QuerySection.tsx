import { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import { appendToLocalStorage } from '@/utils/localStorageArrays';

export default function QuerySection() {
  const ref = useRef<HTMLElement>(null);
  useFadeInOnScroll(ref);

  const [formData, setFormData] = useState({
    schoolName: '',
    name: '',
    email: '',
    query: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    appendToLocalStorage('queries', formData);
    alert('Query submitted');
    setFormData({
      schoolName: '',
      name: '',
      email: '',
      query: '',
    });
  };

  return (
    <section ref={ref} id="query" className="py-20 px-4 fade-in-section">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
          Submit a Query
        </h2>
        
        <Card className="bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Have a Question?</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="querySchoolName">School Name</Label>
                <Input
                  id="querySchoolName"
                  value={formData.schoolName}
                  onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="queryName">Name</Label>
                <Input
                  id="queryName"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="queryEmail">Email</Label>
                <Input
                  id="queryEmail"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="query">Query</Label>
                <Textarea
                  id="query"
                  value={formData.query}
                  onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                  required
                  rows={5}
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
              >
                Submit Query
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
