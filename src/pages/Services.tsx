import { useMemo } from "react";
import { Building, Palette, Smartphone, Package } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  // Services data extracted to a constant outside the component for better performance
  const SERVICES_DATA = [
    {
      icon: Building,
      title: "Architecture & Interiors",
      description:
        "From conceptual design to construction documentation, we create spaces that inspire and function beautifully. Our architectural solutions blend innovation with timeless design principles.",
      features: [
        "Residential Architecture",
        "Commercial Spaces",
        "Interior Design",
        "Space Planning",
      ],
      cta: "Explore Architecture Services",
    },
    {
      icon: Palette,
      title: "Branding & Identity",
      description:
        "We craft distinctive brand identities that resonate with your audience and stand out in the market. From logos to complete brand systems, we ensure consistency and impact.",
      features: [
        "Brand Strategy",
        "Logo Design",
        "Visual Identity Systems",
        "Brand Guidelines",
      ],
      cta: "Discover Branding Solutions",
    },
    {
      icon: Smartphone,
      title: "UI/UX & Web Design",
      description:
        "Creating digital experiences that are intuitive, engaging, and beautiful. We design interfaces that users love and that drive measurable results for your business.",
      features: [
        "Website Design",
        "Mobile App Design",
        "User Experience Research",
        "Prototyping & Testing",
      ],
      cta: "View Digital Design Services",
    },
    {
      icon: Package,
      title: "Visualization & 3D Rendering",
      description:
        "Bring your projects to life before they're built. Our photorealistic 3D renderings and animations help you visualize and communicate your design vision effectively.",
      features: [
        "Architectural Visualization",
        "Interior Renderings",
        "3D Animations",
        "Virtual Reality Tours",
      ],
      cta: "See Visualization Work",
    },
  ];
  
  // Use the constant data with useMemo for better performance
  const services = useMemo(() => SERVICES_DATA, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="section-title mb-6">Our Services</h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            Comprehensive design solutions tailored to transform your vision into reality
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="space-y-6 p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow animate-slide-up h-auto"
                style={{ animationDelay: `${index * 0.1}s`, minHeight: "450px" }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-title">Our Process</h2>
            <p className="text-muted-foreground text-lg">
              A collaborative approach to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your goals, challenges, and vision through in-depth consultations.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Our team develops creative concepts and refines them based on your feedback and requirements.",
              },
              {
                step: "03",
                title: "Delivery",
                description:
                  "We bring the design to life with meticulous execution and ongoing support to ensure success.",
              },
            ].map((phase, index) => (
              <div
                key={phase.step}
                className="text-center space-y-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl font-bold text-accent/20">{phase.step}</div>
                <h3 className="text-xl font-bold">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your project to life
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
