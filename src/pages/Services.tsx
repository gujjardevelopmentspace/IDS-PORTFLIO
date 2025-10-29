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
      <section className="pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-16 px-4 sm:px-6 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
        
        <div className="container mx-auto text-center animate-fade-in relative z-10">
          <div className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium">
            What We Offer
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">Our Services</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive design solutions tailored to transform your vision into reality
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="#services-grid">Explore Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-12 sm:py-16 px-4 sm:px-6 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-slide-up h-auto backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s`, minHeight: "auto" }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 transform transition-transform duration-300 hover:scale-110">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">{service.title}</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-xs sm:text-sm group">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 group-hover:scale-125 transition-transform duration-300" />
                      <span className="group-hover:text-foreground transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full sm:w-auto rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  {service.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10 sm:mb-16 animate-fade-in">
            <h2 className="section-title">Our Process</h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              A collaborative approach to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
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
                className="text-center space-y-3 sm:space-y-4 animate-slide-up p-4 sm:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent/20">{phase.step}</div>
                <h3 className="text-lg sm:text-xl font-bold">{phase.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Ready to Get Started?</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your project to life
          </p>
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
