import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Building2, Globe, MapPin } from 'lucide-react';

export function About() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl mb-6 text-foreground">About IBISs</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leading the way in Sharia-compliant training and consultancy for Islamic banking excellence
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-10 h-10 text-primary" />
                <h2 className="text-4xl text-foreground">Who We Are</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                Islamic Banking Integrity Solutions (IBISs) is a Somalia-based Limited Liability Company established in 2025. We specialize in providing comprehensive Sharia-compliant training and consultancy services tailored to the Islamic banking sector.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our focus is on human capital capacity building, ensuring that professionals in Islamic financial institutions are equipped with the knowledge, skills, and ethical foundation necessary to excel in this rapidly evolving industry.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1626464030543-754c98b00e06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwYmVpZ2V8ZW58MXx8fHwxNzc3MzE4MjU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern architecture"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1635832269626-14cad5052371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBmaW5hbmNlJTIwYWJzdHJhY3QlMjBibHVlfGVufDF8fHx8MTc3NzMxODI1NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Abstract finance"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-10 h-10 text-primary" />
                <h2 className="text-4xl text-foreground">Industry Context</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                The Islamic banking sector has experienced remarkable growth globally, becoming a significant component of the worldwide financial landscape. This expansion brings both tremendous opportunities and unique challenges.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                As institutions scale and markets mature, the demand for highly skilled, ethically grounded professionals who understand both financial principles and Sharia compliance has never been greater. IBISs was founded to address this critical human capital gap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Structure */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-10 h-10 text-primary" />
                <h2 className="text-4xl text-foreground">Legal Structure</h2>
              </div>
              <p className="text-muted-foreground">Our organizational and legal foundation</p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-border">
              <p className="text-lg text-foreground leading-relaxed">
                Islamic Banking Integrity Solutions (IBISs) is a Sole Proprietorship, Limited Liability Company (LLC) specializing in offering Training and Consulting Services to enhance Human Capital Capacity development for the Islamic Banks Financial Services Institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Market */}
      <section className="py-20 bg-primary/10 border-t border-primary/15 border-b border-primary/15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2 justify-center">
              <MapPin className="w-10 h-10 text-primary" />
              <h2 className="text-4xl text-foreground">Home Market</h2>
            </div>
            <p className="text-center text-muted-foreground mb-10">Our primary focus regions in the short and medium terms</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/70 backdrop-blur rounded-2xl p-8 border border-primary/20 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl text-foreground mb-2">Middle East</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Islamic banking institutions across the Gulf and broader Middle Eastern region</p>
              </div>
              <div className="bg-white/70 backdrop-blur rounded-2xl p-8 border border-primary/20 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl text-foreground mb-2">Eastern Africa</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Growing Islamic finance markets in Eastern Africa's banking sector institutions</p>
              </div>
              <div className="bg-white/70 backdrop-blur rounded-2xl p-8 border border-primary/20 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl text-foreground mb-2">Central Africa</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Emerging opportunities in Central African Islamic banking and financial services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-center mb-12 text-foreground">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 border border-border">
              <h3 className="text-2xl mb-4 text-foreground">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Delivering world-class training and consultancy services that meet the highest standards of quality and relevance.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 border border-border">
              <h3 className="text-2xl mb-4 text-foreground">Integrity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Upholding the principles of honesty, transparency, and ethical conduct in all our interactions and services.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 border border-border">
              <h3 className="text-2xl mb-4 text-foreground">Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating lasting positive change in the capabilities and competencies of Islamic banking professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
