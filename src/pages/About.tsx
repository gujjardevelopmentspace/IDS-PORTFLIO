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
      <section className="pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto text-center animate-fade-in relative z-10">
          <div className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium">
            About Our Studio
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">
            We Design Experiences That Shape Tomorrow
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Inventer Design Studio is a collective of creative minds dedicated to crafting spaces,
            brands, and digital experiences that inspire and endure.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#our-story" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              Our Story
            </a>
            <a href="#team" className="px-6 py-3 rounded-lg bg-card border border-border hover:bg-card/80 transition-colors">
              Meet The Team
            </a>
          </div>
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
      <section id="our-story" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-muted/50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="space-y-6 sm:space-y-8 text-center animate-fade-in">
            <div className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium">
              Since 2018
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">Our Story</h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <p className="relative">
                <span className="absolute -left-4 top-0 text-4xl text-primary/20 font-serif">"</span>
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
              <p className="relative">
                Today, we work with clients around the globe, transforming spaces and brands
                through innovative thinking, meticulous craftsmanship, and a relentless pursuit of
                excellence.
                <span className="absolute -right-4 bottom-0 text-4xl text-primary/20 font-serif">"</span>
              </p>
            </div>
            <div className="pt-6">
              <a href="#values" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                <span>Discover our values</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce-horizontal"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
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

      {/* Values */}
      <section id="values" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <div className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium">
              What Drives Us
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These core principles guide our approach to every project and interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 sm:p-8 border border-border/50 rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 bg-background/50 backdrop-blur-sm animate-fade-in text-center space-y-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 transform transition-transform duration-300 hover:scale-110">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
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
