import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles, Code2, Video, Zap, TrendingUp, Users2, Github, Globe, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-architecture.jpg";
import interiorProject from "@/assets/project-interior-1.jpg";
import architectureProject from "@/assets/project-architecture-1.jpg";
import brandingProject from "@/assets/project-branding-1.jpg";
import digitalProject from "@/assets/project-digital-1.jpg";
import idsLogo from "@/assets/ids-logo.png";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0, awards: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<Record<number, {rx:number, ry:number}>>({});
  
  // Mouse position tracker for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animated counter effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 2000;
            const start = Date.now();
            
            const animate = () => {
              const now = Date.now();
              const progress = Math.min((now - start) / duration, 1);
              
              setCounters({
                projects: Math.floor(150 * progress),
                clients: Math.floor(50 * progress),
                years: Math.floor(12 * progress),
                awards: Math.floor(10 * progress)
              });
              
              if (progress < 1) requestAnimationFrame(animate);
            };
            animate();
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);
  const featuredProjects = [
    {
      id: 1,
      title: "SaaS E‑commerce Platform",
      category: "Software Engineering",
      image: digitalProject,
      tags: ["Next.js", "Node.js", "SaaS"]
    },
    {
      id: 2,
      title: "AI Analytics Dashboard",
      category: "Product Engineering",
      image: interiorProject,
      tags: ["TypeScript", "Tailwind", "Charts"]
    },
    {
      id: 3,
      title: "Cinematic Brand Film",
      category: "Video Production",
      image: architectureProject,
      tags: ["4K", "Drone", "VFX"]
    },
    {
      id: 4,
      title: "Launch Teaser Reel",
      category: "Content Studio",
      image: brandingProject,
      tags: ["Motion", "Editing", "Sound Design"]
    },
  ];

  const capabilities = [
    {
      icon: Zap,
      title: "DevOps & Cloud",
      description: "CI/CD, containerization, observability, and cloud deployments",
      color: "from-lime-400 to-lime-500"
    },
    {
      icon: Globe,
      title: "Networking & Security",
      description: "Secure networks, hardening, monitoring, and incident response",
      color: "from-lime-400 to-lime-500"
    },
    {
      icon: Video,
      title: "Video Production & CG Ads",
      description: "Commercials, product films, 2D/3D CG ads with studio-grade finishing",
      color: "from-lime-400 to-lime-500"
    },
    {
      icon: Sparkles,
      title: "Motion Graphics & Editing",
      description: "Motion design, edit, sound, and finishing for high‑impact content",
      color: "from-lime-400 to-lime-500"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 lg:pt-24"
      >
        {/* Animated background with grid */}
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] md:bg-[size:40px_40px] lg:bg-[size:60px_60px]" />
          
          {/* Enhanced animated gradient orbs with more dynamic effects */}
          <div 
            className="absolute top-1/3 left-1/3 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-lime-400/30 to-lime-500/20 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(${mousePosition.x * 0.01}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
          <div 
            className="absolute bottom-1/3 right-1/3 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-zinc-600/30 to-zinc-400/20 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px) rotate(${-mousePosition.x * 0.01}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
          
          {/* Additional floating elements */}
          <div className="absolute top-1/4 right-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-r from-lime-300/10 to-lime-400/5 rounded-full blur-2xl animate-float-slow" />
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-r from-zinc-500/10 to-zinc-300/5 rounded-full blur-2xl animate-float-slow-reverse" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-2 sm:px-4 md:px-6 max-w-6xl mx-auto animate-fade-in">
          {/* Trusted By - Enhanced with subtle animation */}
          <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-500/5 to-transparent h-full w-full animate-shimmer" />
            <p className="text-xs sm:text-sm uppercase tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.2em] text-muted-foreground mb-2 sm:mb-3 md:mb-4 relative">Trusted by innovative teams</p>
            <div className="relative overflow-hidden w-full">
              <div className="flex justify-center flex-wrap sm:flex-nowrap gap-3 sm:gap-4 md:gap-6 opacity-80">
                <span className="px-3 py-1.5 text-xs sm:text-sm text-foreground/80 bg-foreground/5 rounded-full border border-foreground/10 hover:border-lime-400/30 transition-all duration-300 cursor-default">FinTech Co.</span>
                <span className="px-3 py-1.5 text-xs sm:text-sm text-foreground/80 bg-foreground/5 rounded-full border border-foreground/10 hover:border-lime-400/30 transition-all duration-300 cursor-default">HealthAI</span>
                <span className="px-3 py-1.5 text-xs sm:text-sm text-foreground/80 bg-foreground/5 rounded-full border border-foreground/10 hover:border-lime-400/30 transition-all duration-300 cursor-default">RetailCloud</span>
                <span className="px-3 py-1.5 text-xs sm:text-sm text-foreground/80 bg-foreground/5 rounded-full border border-foreground/10 hover:border-lime-400/30 transition-all duration-300 cursor-default">StudioX</span>
                <span className="px-3 py-1.5 text-xs sm:text-sm text-foreground/80 bg-foreground/5 rounded-full border border-foreground/10 hover:border-lime-400/30 transition-all duration-300 cursor-default">CinePro</span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            <span className="block mb-1 sm:mb-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Ship Faster.</span>
            <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-500">
              Scale Smarter.
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-lime-400 via-lime-500 to-lime-400 opacity-30 blur-sm animate-pulse" />
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-1 sm:px-2 md:px-4">
            Unified IT services and creative content studio: DevOps, networking, and cloud engineering alongside CG ads, editing, and motion graphics for modern businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
            <Button 
              size="lg" 
              variant="default" 
              asChild 
              className="group shadow-lg hover:shadow-2xl hover:shadow-lime-400/30 w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 md:px-10 lg:px-12 py-6 sm:py-7 rounded-full transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-lime-500 to-lime-400 hover:from-lime-400 hover:to-lime-500"
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="group border-2 hover:border-lime-400 w-full sm:w-auto text-sm sm:text-base px-8 sm:px-10 py-6 rounded-full hover:bg-lime-400/10 transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/portfolio">
                <Play className="mr-2 w-4 h-4 text-lime-400" />
                Watch Showcase
              </Link>
            </Button>
          </div>

          {/* Stats with animated counters */}
          <div 
            id="stats-section"
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20 pt-6 sm:pt-8 md:pt-12 border-t border-border/50 px-1 sm:px-2 md:px-4 max-w-4xl mx-auto"
          >
            <div className="animate-slide-up group text-center px-1 sm:px-2" style={{ animationDelay: '0.1s' }}>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-gradient-blue-cyan mb-1 transition-all duration-300 group-hover:scale-110">
                {counters.projects}+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="animate-slide-up group text-center px-1 sm:px-2" style={{ animationDelay: '0.2s' }}>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-gradient-blue-cyan mb-1 transition-all duration-300 group-hover:scale-110">
                {counters.clients}+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="animate-slide-up group text-center px-1 sm:px-2" style={{ animationDelay: '0.3s' }}>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-gradient-blue-cyan mb-1 transition-all duration-300 group-hover:scale-110">
                {counters.years}+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="animate-slide-up group text-center px-1 sm:px-2" style={{ animationDelay: '0.4s' }}>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-gradient-blue-cyan mb-1 transition-all duration-300 group-hover:scale-110">
                {counters.awards}+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Award Wins</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Strip (from LinkedIn) */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-y border-border/50 py-6 text-center text-sm">
            <div>
              <p className="text-muted-foreground mb-1">Industry</p>
              <p className="font-semibold">Technology, Information & Internet</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Location</p>
              <p className="font-semibold">Fort Worth, Texas</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Followers</p>
              <p className="font-semibold">127+</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Team Size</p>
              <p className="font-semibold">11–50 employees</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-24">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto p-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-lime-500/30 via-lime-400/10 to-zinc-700/40">
            <div className="relative overflow-hidden rounded-[calc(theme(borderRadius.2xl)-1px)] sm:rounded-[calc(theme(borderRadius.3xl)-1px)] border border-border bg-gradient-to-br from-lime-400/10 via-transparent to-zinc-900 p-6 sm:p-8 md:p-12 creative-shadow">
              <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Ready to outpace the competition?</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 md:mb-8">Let's build a product that performs and a story that sells. Start with a free strategy call.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild className="rounded-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base">
                  <Link to="/contact">Book Strategy Call</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-2 text-sm sm:text-base">
                  <Link to="/portfolio">See Case Studies</Link>
                </Button>
              </div>
              </div>
              <div className="pointer-events-none absolute -right-8 -bottom-8 w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 rounded-full bg-lime-400/10 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-lime-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-zinc-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-14 md:mb-16 animate-fade-in">
            <div className="inline-block px-4 py-1 rounded-full bg-lime-400/10 text-lime-500 text-xs tracking-wider uppercase font-medium mb-4">Testimonials</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/80">What Clients Say</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">Results, not promises. Here's why partners choose us again and again.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: "They shipped our SaaS MVP in 6 weeks and it scaled to 50k users with zero downtime.",
                name: "Amir Khan",
                role: "CTO, FinTech Co.",
                rating: 5
              },
              {
                quote: "The brand film lifted our conversion rate by 38%. World‑class storytelling.",
                name: "Sara Malik",
                role: "Head of Marketing, HealthAI",
                rating: 5
              },
              {
                quote: "Clear process, clean code, and on‑time delivery. Best vendor experience we've had.",
                name: "David Lee",
                role: "Product Lead, RetailCloud",
                rating: 5
              },
            ].map((t, i) => (
              <div 
                key={i} 
                className="p-6 sm:p-8 bg-card border border-border hover:border-lime-400/20 rounded-3xl shadow-lg hover:shadow-xl hover:shadow-lime-400/5 hover:scale-[1.02] transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Star rating */}
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Sparkles key={i} className="w-4 h-4 text-lime-400 mr-1" />
                  ))}
                </div>
                
                <p className="text-base sm:text-lg leading-relaxed mb-6 italic">"{t.quote}"</p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-400 to-lime-500 flex items-center justify-center text-white font-bold mr-3">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View more testimonials button */}
          <div className="text-center mt-10 sm:mt-12">
            <Button 
              variant="outline" 
              asChild 
              className="rounded-full border-2 hover:border-lime-400 px-6 py-2 hover:bg-lime-400/5"
            >
              <Link to="/about">
                View More Testimonials
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">What We Do</h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
              Full‑stack web apps, SaaS platforms, and cinematic films — crafted end‑to‑end.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className="group relative p-6 sm:p-8 bg-card border border-border rounded-3xl hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 animate-slide-up creative-shadow overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${capability.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                  <capability.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 relative z-10 group-hover:text-primary transition-colors">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed relative z-10 group-hover:text-foreground/90 transition-colors">
                  {capability.description}
                </p>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-lime-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-zinc-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
            <div className="inline-block px-4 py-1 rounded-full bg-lime-400/10 text-lime-500 text-xs tracking-wider uppercase font-medium mb-4">Our Portfolio</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/80">Featured Work</h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
              Work that blends robust software engineering with cinematic video storytelling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.id}
                to="/portfolio"
                className="group relative overflow-hidden rounded-3xl aspect-[4/3] animate-slide-up will-change-transform border border-border/50 hover:border-lime-400/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-lime-400/10"
                onMouseMove={(e) => {
                  const rect = (e.currentTarget as HTMLAnchorElement).getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const rx = ((y / rect.height) - 0.5) * -8; // enhanced tilt X
                  const ry = ((x / rect.width) - 0.5) * 8;   // enhanced tilt Y
                  setTilt((t) => ({ ...t, [index]: { rx, ry } }));
                }}
                onMouseLeave={() => {
                  setTilt((t) => ({ ...t, [index]: { rx: 0, ry: 0 } }));
                }}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transform: tilt[index] ? `perspective(1000px) rotateX(${tilt[index].rx}deg) rotateY(${tilt[index].ry}deg) scale(1.02)` : 'scale(1)',
                  transition: 'transform 300ms ease-out'
                }}
              >
                {/* Image with enhanced parallax-like zoom */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:via-black/60 transition-all duration-700" />
                  
                  {/* Animated border glow on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-all duration-500 rounded-3xl" />
                  
                  {/* Additional hover effect */}
                  <div className="absolute inset-0 bg-lime-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 transform translate-y-0 group-hover:-translate-y-2 transition-all duration-500">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1.5 text-xs font-medium bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 text-primary group-hover:bg-primary/30 group-hover:scale-105 transition-all duration-300"
                        style={{ animationDelay: `${tagIndex * 0.05}s` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-lime-400 mb-2 group-hover:text-lime-300 transition-colors">
                    {project.category}
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-lime-300 group-hover:to-lime-500 transition-all duration-500">
                    {project.title}
                  </h3>
                  
                  {/* View project indicator */}
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="inline-flex items-center text-xs sm:text-sm text-lime-400 font-medium">
                      View Project <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Floating icon on hover */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-12 h-12 rounded-full bg-gradient-to-br from-lime-400 to-lime-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 shadow-lg shadow-lime-400/40">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12 md:mt-16">
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="group border-2 hover:border-primary hover:bg-primary/10 text-sm sm:text-base px-8 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20"
            >
              <Link to="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-card/30">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]" />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-lime-400/15 to-lime-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-zinc-600/15 to-zinc-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center animate-fade-in px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 md:mb-12">
              Where Code Meets
              <br />
              <span className="text-gradient-purple-blue relative inline-block">
                <span className="relative z-10">Creative Vision</span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-lime-400/25 via-lime-500/25 to-lime-400/25 blur-lg animate-pulse" />
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              We believe the future of digital experiences lies at the intersection of cutting-edge 
              technology and compelling storytelling. Our multidisciplinary team brings together software 
              engineers, creative directors, and visual artists to craft experiences that don't just 
              function—they inspire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="default" 
                asChild 
                className="group shadow-xl hover:shadow-2xl hover:shadow-lime-400/30 text-sm sm:text-base px-8 sm:px-10 py-6 rounded-full transform hover:scale-105 transition-all duration-300"
              >
                <Link to="/about" className="flex items-center">
                  Learn More About Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call-to-Action Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-lime-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-zinc-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="p-[1px] rounded-3xl bg-gradient-to-br from-lime-500/40 via-lime-400/20 to-zinc-700/40">
            <div className="relative overflow-hidden rounded-[calc(theme(borderRadius.3xl)-1px)] border border-border bg-gradient-to-br from-lime-400/10 via-transparent to-zinc-900 p-8 sm:p-10 md:p-16 shadow-2xl">
              
              {/* Animated background elements */}
              <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-lime-400/10 blur-3xl animate-pulse" />
              <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-zinc-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-16 items-center">
                <div className="flex-1">
                  <div className="inline-block px-4 py-1 rounded-full bg-lime-400/10 text-lime-500 text-xs tracking-wider uppercase font-medium mb-4">Start Today</div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/80">
                    Ready to Transform Your Digital Presence?
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                    Our team of experts is ready to help you build innovative solutions that drive real business results. 
                    Let's create something extraordinary together.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      asChild 
                      className="group shadow-lg hover:shadow-2xl hover:shadow-lime-400/30 text-sm sm:text-base px-8 py-6 rounded-full transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-lime-500 to-lime-400 hover:from-lime-400 hover:to-lime-500"
                    >
                      <Link to="/contact">
                        Schedule a Consultation
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                      </Link>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      asChild 
                      className="group border-2 hover:border-lime-400 text-sm sm:text-base px-8 py-6 rounded-full hover:bg-lime-400/10 transform hover:scale-105 transition-all duration-300"
                    >
                      <Link to="/portfolio">
                        Explore Our Work
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className="flex-1 w-full lg:w-auto">
                  <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-lime-500/30 via-lime-400/20 to-zinc-700/30 shadow-xl">
                    <div className="bg-card/80 backdrop-blur-sm rounded-[calc(theme(borderRadius.2xl)-1px)] p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold mb-4">Get in Touch</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                          <div className="w-10 h-10 rounded-full bg-lime-400/10 flex items-center justify-center">
                            <Users2 className="w-5 h-5 text-lime-400" />
                          </div>
                          <div>
                            <p className="font-medium">Schedule a Team Call</p>
                            <p className="text-sm">Meet our experts</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                          <div className="w-10 h-10 rounded-full bg-lime-400/10 flex items-center justify-center">
                            <Code2 className="w-5 h-5 text-lime-400" />
                          </div>
                          <div>
                            <p className="font-medium">Technical Assessment</p>
                            <p className="text-sm">Get a free project review</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                          <div className="w-10 h-10 rounded-full bg-lime-400/10 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-lime-400" />
                          </div>
                          <div>
                            <p className="font-medium">Growth Strategy</p>
                            <p className="text-sm">Plan your digital roadmap</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
