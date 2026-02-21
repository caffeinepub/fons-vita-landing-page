import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const businessAreas = [
  {
    title: 'Traffic Safety Products',
    description: 'Comprehensive range of road safety equipment, signage, and protective gear to ensure safer transportation infrastructure across Albania and beyond.',
    icon: '/assets/generated/traffic-safety-icon.dim_64x64.png',
    gradient: 'from-amber-500/10 to-orange-500/10',
    borderColor: 'hover:border-amber-500/50'
  },
  {
    title: 'Steel Trading',
    description: 'High-quality steel products and materials for construction, manufacturing, and industrial applications. Reliable supply chain and competitive pricing.',
    icon: '/assets/generated/steel-trading-icon.dim_64x64.png',
    gradient: 'from-slate-500/10 to-gray-500/10',
    borderColor: 'hover:border-slate-500/50'
  },
  {
    title: 'Energy Trading',
    description: 'Strategic energy commodity trading services, connecting suppliers and consumers in the evolving energy market landscape.',
    icon: '/assets/generated/energy-trading-icon.dim_64x64.png',
    gradient: 'from-yellow-500/10 to-amber-500/10',
    borderColor: 'hover:border-yellow-500/50'
  },
  {
    title: 'Commerce',
    description: 'Diverse product sourcing and distribution services, facilitating seamless trade operations for businesses across multiple sectors.',
    icon: '/assets/generated/commerce-icon.dim_64x64.png',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'hover:border-blue-500/50'
  },
  {
    title: 'Crypto Investments',
    description: 'Forward-thinking investment strategies in digital assets and blockchain technologies, positioning for the future of finance.',
    icon: '/assets/generated/crypto-icon.dim_64x64.png',
    gradient: 'from-purple-500/10 to-pink-500/10',
    borderColor: 'hover:border-purple-500/50'
  }
];

export function BusinessAreas() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our <span className="text-steel-500">Business Areas</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-steel-500 to-transparent" />
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Diversified expertise across key sectors driving economic growth
          </p>
        </div>

        {/* Business Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {businessAreas.map((area, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-300 border-2 ${area.borderColor} overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <CardHeader className="relative">
                <div className="w-16 h-16 mb-4 rounded-xl bg-card flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={area.icon}
                    alt={`${area.title} icon`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
