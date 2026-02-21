import { Hero } from './components/Hero';
import { About } from './components/About';
import { BusinessAreas } from './components/BusinessAreas';
import { Values } from './components/Values';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <BusinessAreas />
      <Values />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
