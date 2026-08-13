import { Link } from 'react-router';
import { BookOpen, CheckCircle, Users, TrendingUp, FileCheck, Award } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: BookOpen,
      title: 'Knowledge Sharing',
      description: 'Comprehensive training programs designed to enhance understanding of Islamic banking principles, Sharia compliance, and industry best practices.',
    },
    {
      icon: CheckCircle,
      title: 'Sharia Compliance Assessment',
      description: 'Expert evaluation and guidance to ensure your operations align with Sharia principles and meet regulatory requirements.',
    },
    {
      icon: Users,
      title: 'Training Programs',
      description: 'Customized workshops and courses for professionals at all levels, from foundational knowledge to advanced specializations.',
    },
    {
      icon: TrendingUp,
      title: 'Human Capital Development',
      description: 'Strategic consulting to build organizational capabilities, strengthen teams, and foster a culture of continuous learning.',
    },
    {
      icon: FileCheck,
      title: 'Compliance Consulting',
      description: 'Specialized advisory services to navigate the complex landscape of Islamic finance regulations and standards.',
    },
    {
      icon: Award,
      title: 'Certification Programs',
      description: 'Professional certification tracks that validate expertise and enhance career advancement in Islamic banking.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl mb-6 text-foreground">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Sharia-compliant solutions for Islamic banking excellence
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl mb-6 text-foreground">What We Offer</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our core offerings are designed to address the unique needs of Islamic financial institutions. From foundational training to advanced consulting, we provide the expertise and support necessary to excel in today's competitive landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-background rounded-2xl p-8 border border-border hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl mb-6 text-foreground">Our Approach</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every engagement is tailored to your specific needs, combining theoretical knowledge with practical application to deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                1
              </div>
              <h4 className="mb-2 text-foreground">Assessment</h4>
              <p className="text-sm text-muted-foreground">Understanding your unique challenges and goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                2
              </div>
              <h4 className="mb-2 text-foreground">Design</h4>
              <p className="text-sm text-muted-foreground">Crafting customized solutions and programs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                3
              </div>
              <h4 className="mb-2 text-foreground">Delivery</h4>
              <p className="text-sm text-muted-foreground">Implementing training and consultancy services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                4
              </div>
              <h4 className="mb-2 text-foreground">Evaluation</h4>
              <p className="text-sm text-muted-foreground">Measuring impact and continuous improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-6">Ready to Elevate Your Capabilities?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
            Let's discuss how our services can support your organization's growth and success
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
