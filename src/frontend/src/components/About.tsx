import { Globe, TrendingUp, Users } from 'lucide-react';

export function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="text-steel-500">Fons Vita</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-steel-500 to-transparent" />
            <p className="text-xl text-muted-foreground mt-4">
              Pioneering B2B Trading Excellence
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg md:text-xl text-card-foreground leading-relaxed mb-6">
                Fons Vita sh.p.k. is a dynamic trading company specializing in B2B commerce 
                and international sourcing. We excel at identifying in-demand products within 
                the Albanian market and connecting businesses with high-quality goods from 
                around the globe.
              </p>
              <p className="text-lg md:text-xl text-card-foreground leading-relaxed">
                Our mission is to bridge markets, facilitate trade, and create lasting 
                partnerships that drive growth and innovation across multiple sectors. 
                With expertise spanning traffic safety, steel trading, energy, commerce, 
                and emerging technologies, we deliver comprehensive solutions tailored to 
                your business needs.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-steel-500 transition-colors duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-steel-500/10 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-steel-500" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  Global Reach
                </h3>
                <p className="text-muted-foreground">
                  International sourcing network spanning multiple continents
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-steel-500 transition-colors duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-steel-500/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-steel-500" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  Market Expertise
                </h3>
                <p className="text-muted-foreground">
                  Deep understanding of Albanian and international markets
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-steel-500 transition-colors duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-steel-500/10 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-steel-500" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  B2B Focus
                </h3>
                <p className="text-muted-foreground">
                  Dedicated to building strong business-to-business relationships
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
