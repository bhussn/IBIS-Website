import { Shield, CheckCircle, Lightbulb, Rocket, Leaf, Heart } from 'lucide-react';

export function Values() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty, transparency, and ethical conduct in everything we do. Our commitment to integrity forms the foundation of trust with our clients and partners.',
      color: 'from-blue-500/10 to-blue-500/5',
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-600',
    },
    {
      icon: CheckCircle,
      title: 'Sharia Compliance',
      description: 'Every service we offer is meticulously designed to align with Sharia principles. We ensure that all training, consulting, and recommendations meet the strictest standards of Islamic finance.',
      color: 'from-green-500/10 to-green-500/5',
      iconBg: 'bg-green-500/10',
      iconColor: 'text-green-600',
    },
    {
      icon: Lightbulb,
      title: 'Knowledge Excellence',
      description: 'We believe in the transformative power of knowledge. Our experts bring deep expertise and stay at the forefront of industry developments to deliver world-class training and insights.',
      color: 'from-amber-500/10 to-amber-500/5',
      iconBg: 'bg-amber-500/10',
      iconColor: 'text-amber-600',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'While rooted in timeless principles, we embrace modern methodologies and technologies to deliver innovative solutions that meet the evolving needs of Islamic banking professionals.',
      color: 'from-purple-500/10 to-purple-500/5',
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-600',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We are committed to fostering long-term growth and sustainable development. Our programs are designed to create lasting impact that benefits individuals, institutions, and communities.',
      color: 'from-emerald-500/10 to-emerald-500/5',
      iconBg: 'bg-emerald-500/10',
      iconColor: 'text-emerald-600',
    },
    {
      icon: Heart,
      title: 'Caring',
      description: 'We are an accessible and supportive partner to every client and institution we serve. We listen, we understand, and we walk alongside you — ensuring that our guidance is as human as it is professional.',
      color: 'from-rose-400/10 to-rose-400/5',
      iconBg: 'bg-rose-400/10',
      iconColor: 'text-rose-500',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl mb-6 text-foreground">Our Core Values</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            At IBISs, our values are more than words—they are the bedrock of our identity and the compass that guides our work. These principles shape how we serve our clients, develop our programs, and contribute to the Islamic banking community.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${value.color} rounded-2xl p-8 border border-border hover:border-primary hover:shadow-xl transition-all duration-300`}
              >
                <div className={`w-16 h-16 ${value.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <value.icon className={`w-8 h-8 ${value.iconColor}`} />
                </div>
                <h3 className="text-2xl mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-12 border border-primary/20">
            <h2 className="text-3xl mb-6 text-center text-foreground">Living Our Values</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-6">
              These values are not aspirations—they are commitments we honor every day. They inform how we design our programs, engage with clients, and measure our success. When you partner with IBISs, you partner with an organization that places principles above profit and impact above expediency.
            </p>
            <p className="text-lg text-foreground text-center">
              Our values are your assurance of quality, integrity, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Quote */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="text-3xl italic leading-relaxed mb-6">
            "Excellence is not a destination, but a journey guided by unwavering principles."
          </blockquote>
          <p className="text-xl text-primary-foreground/90">
            — IBISs Philosophy
          </p>
        </div>
      </section>
    </div>
  );
}
