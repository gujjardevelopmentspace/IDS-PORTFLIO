import { useMemo } from "react";
import { Target, Lightbulb, Award, Users, MapPin, Calendar, Briefcase } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import studioImage from "@/assets/about-studio.jpg";

const About = () => {
  const values = useMemo(() => [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries with creative solutions that challenge conventions",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Meticulous attention to detail in every aspect of our work",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality in every project",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building partnerships that inspire and create lasting impact",
    },
  ], []);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">We Design Experiences That Shape Tomorrow</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Inventer Design Studio is a collective of creative minds dedicated to crafting spaces,
            brands, and digital experiences that inspire and endure.
          </p>
        </div>
      </section>

      {/* Studio Image */}
      <section className="px-4 sm:px-6 pb-8 sm:pb-12 md:pb-16">
        <div className="container mx-auto">
          <div className="overflow-hidden rounded-lg animate-slide-up">
            <img
              src={studioImage}
              alt="Inventer Design Studio"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 sm:space-y-8 text-center animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Our Story</h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2018, Inventer Design Studio emerged from a shared vision: to create
                design solutions that transcend trends and stand the test of time. What began as a
                small collective of architects and designers has evolved into a full-service design
                studio.
              </p>
              <p>
                Our multidisciplinary approach brings together expertise in architecture, interior
                design, branding, and digital experiences. We believe that great design happens at
                the intersection of form and function, where creativity meets purpose.
              </p>
              <p>
                Today, we work with clients around the globe, transforming spaces and brands
                through innovative thinking, meticulous craftsmanship, and a relentless pursuit of
                excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-background to-accent/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Industry Leaders</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering cutting-edge solutions since 2024 with unmatched expertise and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex flex-col items-center text-center p-6 sm:p-8 bg-card rounded-xl border border-accent/20 shadow-lg hover:shadow-accent/10 hover:border-accent/30 transition-all duration-300 animate-slide-up group min-h-[auto] sm:min-h-[500px] md:min-h-[600px]">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">Global Headquarters</h3>
              <p className="text-muted-foreground font-medium text-lg">Fort Worth, Texas</p>
              <p className="text-sm text-muted-foreground/80 mt-2 italic">Strategically located in the heart of innovation</p>
              <div className="mt-4 space-y-2 text-sm relative">
                <div className="absolute -left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-transparent opacity-50 rounded-full hidden md:block"></div>
                <p className="text-muted-foreground hover:text-accent transition-colors">500 Main Street, Suite 300</p>
                <p className="text-muted-foreground hover:text-accent transition-colors">Technology District</p>
                <p className="text-muted-foreground hover:text-accent transition-colors">Central hub for our worldwide operations</p>
                <p className="text-muted-foreground hover:text-accent transition-colors">76102, United States</p>
                <p className="text-muted-foreground hover:text-accent transition-colors">Near Sundance Square</p>
                <p className="text-muted-foreground hover:text-accent transition-colors">24/7 Security & Access</p>
                <p className="text-muted-foreground hover:text-accent transition-colors">Eco-friendly LEED Certified Building</p>
                <div className="pt-3 mt-3 border-t border-accent/20">
                  <p className="text-xs text-accent/70">Where innovation meets execution</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center p-8 bg-card rounded-xl border border-accent/20 shadow-lg hover:shadow-accent/10 hover:border-accent/30 transition-all duration-300 animate-slide-up group min-h-[600px]" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">Established</h3>
              <p className="text-muted-foreground font-medium text-lg">2024</p>
              <p className="text-sm text-muted-foreground/80 mt-2 italic">Building the future of technology</p>
              <div className="mt-4 space-y-2 text-sm relative">
                <div className="absolute -left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-transparent opacity-50 rounded-full hidden md:block"></div>
                <p className="text-muted-foreground hover:text-accent transition-colors">Pioneering digital transformation</p>
                <p className="text-muted-foreground hover:text-accent transition-colors">Driving industry innovation</p>
                <p className="text-muted-foreground hover:text-accent transition-colors">Shaping tomorrow's solutions</p>
                <p className="text-muted-foreground hover:text-accent transition-colors">Founded by tech visionaries</p>
                <p className="text-muted-foreground hover:text-accent transition-colors">Rapid growth in first year</p>
                <p className="text-muted-foreground hover:text-accent transition-colors">Global expansion planned for 2025</p>
                <p className="text-muted-foreground hover:text-accent transition-colors">Award-winning startup</p>
                <div className="pt-3 mt-3 border-t border-accent/20">
                  <p className="text-xs text-accent/70">From vision to reality</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center p-8 bg-card rounded-xl border border-accent/20 shadow-lg hover:shadow-accent/10 hover:border-accent/30 transition-all duration-300 animate-slide-up group min-h-[600px]" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Briefcase className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">Core Expertise</h3>
              <div className="mt-4 space-y-2 text-sm relative">
                <div className="absolute -left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-transparent opacity-50 rounded-full hidden md:block"></div>
                <p className="text-muted-foreground hover:text-accent transition-colors font-semibold">Enterprise Solutions</p>
                <p className="text-muted-foreground hover:text-accent transition-colors">Website Development • Mobile App Development</p>
                <p className="text-muted-foreground hover:text-accent transition-colors">E-Commerce Solutions • UI/UX Design</p>
                <p className="text-muted-foreground hover:text-accent transition-colors font-semibold mt-3">IT Infrastructure</p>
                <p className="text-muted-foreground hover:text-accent transition-colors">IT Services & Support • Networking Administration</p>
                <p className="text-muted-foreground hover:text-accent transition-colors">System Administration • DevOps, SysOps & AiOps</p>
                <p className="text-muted-foreground hover:text-accent transition-colors font-semibold mt-3">Security & Cloud</p>
                <p className="text-muted-foreground hover:text-accent transition-colors">Cybersecurity • Cloud Solutions</p>
                <p className="text-muted-foreground hover:text-accent transition-colors">Data Protection • Compliance Management</p>
                <div className="pt-3 mt-3 border-t border-accent/20">
                  <p className="text-xs text-accent/70">Comprehensive expertise for your digital journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-title">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide every decision and design we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center space-y-4 p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Extraordinary</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to transform your vision into reality? We'd love to hear about your project.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-11 px-8"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
