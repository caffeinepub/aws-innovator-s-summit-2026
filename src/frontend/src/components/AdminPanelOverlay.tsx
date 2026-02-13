import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { getFromLocalStorage } from '@/utils/localStorageArrays';
import { X } from 'lucide-react';

interface AdminPanelOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminPanelOverlay({ isOpen, onClose }: AdminPanelOverlayProps) {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-auto">
        <Card className="bg-card shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-2xl text-primary">Admin Panel</CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-secondary"
            >
              <X className="w-5 h-5" />
            </Button>
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
    </div>
  );
}
