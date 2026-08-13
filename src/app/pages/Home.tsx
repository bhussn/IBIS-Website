import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  BookOpen,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1719194981461-fa0ec450999e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJc2xhbWljJTIwZ2VvbWV0cmljJTIwcGF0dGVybiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzczMTgyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Islamic geometric pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
              Sharia-Compliant Consulting &amp; Training
            </p>
            <h1 className="text-6xl mb-6 text-foreground leading-[1.1] font-light">
              Islamic Banking
              <br />
              Integrity Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Our vision is to be the lead Training and
              Consultancy Company contributing to the Islamic
              Banking Integrity Solutions for the development of
              the Islamic Banking Sector
            </p>
            <Link
              to="/services"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1776661617170-afed368e60af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxJc2xhbWljJTIwZ2VvbWV0cmljJTIwcGF0dGVybiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzczMTgyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Islamic architecture"
                className="w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-6 text-foreground">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To promote and offer training and consultancy
                for human capital capacity building in the
                Islamic banking sector. We are committed to
                advancing knowledge, ensuring Sharia compliance,
                and fostering sustainable development across
                Islamic financial institutions worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-primary/10 border-t border-primary/15 border-b border-primary/15">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-center mb-4 text-foreground">
            Our Goals
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            The two strategic goals that drive everything we do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/70 backdrop-blur rounded-2xl p-8 border border-primary/20 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/15 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl mb-4 text-foreground font-semibold">
                Human Capital Development
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide Training and Consulting Services to
                promote Human Capital Capacity Development for
                the Islamic Banking Sector Institutions.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur rounded-2xl p-8 border border-primary/20 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/15 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl mb-4 text-foreground font-semibold">
                Expanding Services &amp; Products
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To create an opportunity for Islamic Banks
                Financial Services institutions to widen the
                choice and size of its services &amp; product
                offerings more effectively and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-center mb-16 text-foreground">
            Our Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl mb-4 text-foreground">
                Knowledge-Based Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Deliver knowledge-based consultancy and training
                focused on integrity, equipping professionals
                with the expertise needed to excel in
                Sharia-compliant banking practices.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl mb-4 text-foreground">
                Sustainable Development
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Support sustainable human capital development in
                Islamic financial institutions, building lasting
                capacity for growth and ethical excellence in
                the sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <Award className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-4xl mb-2">2025</h3>
              <p className="text-primary-foreground/80">
                Established
              </p>
            </div>
            <div>
              <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-4xl mb-2">100%</h3>
              <p className="text-primary-foreground/80">
                Sharia Compliant
              </p>
            </div>
            <div>
              <Users className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-4xl mb-2">USA</h3>
              <p className="text-primary-foreground/80">
                Based LLC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-accent/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-6 text-foreground">
            Ready to Transform Your Team?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Partner with us to build exceptional human capital
            in Islamic banking
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}