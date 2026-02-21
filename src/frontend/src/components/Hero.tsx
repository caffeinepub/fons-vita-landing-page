import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-background.dim_1920x800.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-blue-900/85" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, oklch(0.8 0.05 240) 1px, transparent 1px),
                           linear-gradient(to bottom, oklch(0.8 0.05 240) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/assets/PNG FONS LOGO E BARDHE.png"
              alt="Fons Vita Logo"
              className="h-24 md:h-32 w-auto"
            />
          </div>

          {/* Company Name */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Fons Vita
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-steel-400 to-transparent" />
          </div>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl font-light text-steel-200 tracking-wide">
            Connecting Trade, Energy, and Innovation
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-steel-300 max-w-2xl mx-auto leading-relaxed">
            Your trusted partner in B2B trading and international sourcing, 
            bridging markets across Albania and the world.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-steel-500 hover:bg-steel-600 text-white px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-steel-500/50 transition-all duration-300 group"
            >
              Discover Opportunities
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-steel-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-steel-400 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
