const values = [
  {
    title: 'Trust',
    description: 'Building lasting relationships through transparency, reliability, and ethical business practices. Your success is our commitment.',
    icon: '/assets/generated/trust-icon.dim_64x64.png',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Innovation',
    description: 'Embracing new technologies and forward-thinking strategies to stay ahead in a rapidly evolving global marketplace.',
    icon: '/assets/generated/innovation-icon.dim_64x64.png',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Global Partnerships',
    description: 'Fostering strong international connections that create mutual value and open doors to new opportunities worldwide.',
    icon: '/assets/generated/partnerships-icon.dim_64x64.png',
    gradient: 'from-emerald-500 to-teal-500'
  }
];

export function Values() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, oklch(0.5 0.1 240) 1px, transparent 0)`,
          backgroundSize: '3rem 3rem'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our <span className="text-steel-500">Core Values</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-steel-500 to-transparent" />
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-card border-2 border-border rounded-2xl p-8 hover:border-steel-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Icon with Gradient Background */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity duration-300`} />
                <div className={`relative w-20 h-20 mx-auto bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <img
                    src={value.icon}
                    alt={`${value.title} icon`}
                    className="w-12 h-12 object-contain brightness-0 invert"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-card-foreground mb-4 text-center">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {value.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-steel-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
