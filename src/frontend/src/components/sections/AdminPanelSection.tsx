import { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import { getFromLocalStorage } from '@/utils/localStorageArrays';

export default function AdminPanelSection() {
  const ref = useRef<HTMLElement>(null);
  useFadeInOnScroll(ref);

  const [password, setPassword] = useState('');
  const [displayData, setDisplayData] = useState<string | null>(null);

  const handleView = (type: 'queries' | 'registrations') => {
    if (password !== '003') {
      alert('Wrong password');
      return;
    }

    const data = getFromLocalStorage(type);
    setDisplayData(JSON.stringify(data, null, 2));
  };

  return (
    <section ref={ref} id="admin" className="py-20 px-4 fade-in-section">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
          Admin Panel
        </h2>
        
        <Card className="bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Access Data</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="adminPassword">Password</Label>
              <Input
                id="adminPassword"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
              />
            </div>

            <div className="flex gap-4">
              <Button
                onClick={() => handleView('queries')}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
              >
                View Queries
              </Button>
              <Button
                onClick={() => handleView('registrations')}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
              >
                View Registrations
              </Button>
            </div>

            {displayData && (
              <div className="mt-6">
                <pre className="bg-muted p-4 rounded-lg overflow-auto max-h-96 text-sm border border-border">
                  {displayData}
                </pre>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
