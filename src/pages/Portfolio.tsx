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
      <section className="pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Portfolio</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated collection of our most impactful projects, showcasing innovation across
            architecture, interior design, branding, and digital experiences.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="space-y-16 sm:space-y-24 md:space-y-32">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center animate-slide-up ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{project.title}</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-4 sm:gap-8 text-xs sm:text-sm">
                    <div>
                      <p className="font-semibold mb-1">Client</p>
                      <p className="text-muted-foreground">{project.client}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Year</p>
                      <p className="text-muted-foreground">{project.year}</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`overflow-hidden rounded-lg hover-scale ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover"
                  />
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
