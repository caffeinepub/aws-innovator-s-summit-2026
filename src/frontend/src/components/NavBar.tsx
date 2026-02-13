import { Button } from '@/components/ui/button';

interface NavBarProps {
  onAdminClick: () => void;
}

export default function NavBar({ onAdminClick }: NavBarProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-primary">AWS SUMMIT 2026</div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary hover:bg-secondary"
          >
            About
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection('programme')}
            className="text-foreground hover:text-primary hover:bg-secondary"
          >
            Programme
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection('committee')}
            className="text-foreground hover:text-primary hover:bg-secondary"
          >
            Committee
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection('register')}
            className="text-foreground hover:text-primary hover:bg-secondary"
          >
            Register
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection('query')}
            className="text-foreground hover:text-primary hover:bg-secondary"
          >
            Query
          </Button>
          <Button
            variant="ghost"
            onClick={onAdminClick}
            className="text-foreground hover:text-primary hover:bg-secondary"
          >
            Admin
          </Button>
        </div>
      </div>
    </nav>
  );
}
