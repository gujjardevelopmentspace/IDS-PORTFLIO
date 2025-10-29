import { useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import interiorProject from "@/assets/project-interior-1.jpg";
import architectureProject from "@/assets/project-architecture-1.jpg";
import brandingProject from "@/assets/project-branding-1.jpg";
import digitalProject from "@/assets/project-digital-1.jpg";

const Portfolio = () => {
  const projects = useMemo(() => [
    {
      id: 1,
      title: "Urban Residence",
      category: "Interior Design",
      description: "Luxury apartment transformation with minimalist aesthetics and functional elegance",
      image: interiorProject,
      client: "Private Client",
      year: "2024",
    },
    {
      id: 2,
      title: "Modern Complex",
      category: "Architecture",
      description: "Contemporary commercial building featuring geometric patterns and sustainable design",
      image: architectureProject,
      client: "Urban Development Corp",
      year: "2024",
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "Branding",
      description: "Complete brand overhaul for a tech startup, including logo and visual identity",
      image: brandingProject,
      client: "Tech Innovators",
      year: "2024",
    },
    {
      id: 4,
      title: "Digital Platform",
      category: "UI/UX Design",
      description: "Intuitive web platform design with focus on user experience and accessibility",
      image: digitalProject,
      client: "Digital Solutions Inc",
      year: "2024",
    },
  ], []);

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
            Our Work
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">Our Portfolio</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our finest work across architecture, interiors, branding, and digital design
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/20 shadow-sm hover:shadow-lg transition-all duration-300 animate-slide-up bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 sm:p-8 relative">
                  <div className="inline-block mb-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium">{project.category}</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">{project.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-foreground">Client:</span> {project.client}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-foreground">Year:</span> {project.year}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm">
                      <span>View Project</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce-horizontal"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with exceptional design
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-11 px-8"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
