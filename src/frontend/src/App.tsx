import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import {
  HeroSection,
  AboutSection,
  ProgrammeSection,
  CommitteeSection,
  RegistrationSection,
  QuerySection,
  FooterSection,
} from './components/sections';
import AdminPanelOverlay from './components/AdminPanelOverlay';

function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Clear localStorage on page load
  useEffect(() => {
    localStorage.removeItem('queries');
    localStorage.removeItem('registrations');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      <NavBar onAdminClick={() => setIsAdminOpen(true)} />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ProgrammeSection />
        <CommitteeSection />
        <RegistrationSection />
        <QuerySection />
      </main>
      <FooterSection />
      <AdminPanelOverlay isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </div>
  );
}

export default App;
