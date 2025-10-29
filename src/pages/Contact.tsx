import { useState, useCallback, useMemo } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  }, [toast]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

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
            Get In Touch
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">Let's Build Something Extraordinary</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Get in touch and let's create
            something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              <div className="p-6 sm:p-8 rounded-xl border border-border/50 hover:border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Contact Information</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                  Whether you have a question about our services, need a quote, or want to discuss a
                  potential project, our team is ready to answer all your questions.
                </p>

                {useMemo(() => (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-3 sm:space-x-4 group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a href="mailto:hello@inventerdesign.com" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 block">hello@inventerdesign.com</a>
                        <a href="mailto:info@inventerdesign.com" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 block">info@inventerdesign.com</a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4 group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a href="tel:+15551234567" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 block">+1 (555) 123-4567</a>
                        <a href="tel:+15559876543" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 block">+1 (555) 987-6543</a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4 group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Office</h3>
                        <p className="text-sm text-muted-foreground">
                          123 Design Street, Creative District
                          <br />
                          New York, NY 10001
                          <br />
                          United States
                        </p>
                      </div>
                    </div>
                  </div>
                ), [])}
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-card rounded-xl p-5 sm:p-6 md:p-8 shadow-lg border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="rounded-lg border-border/50 focus:border-primary/50 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="rounded-lg border-border/50 focus:border-primary/50 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="rounded-lg border-border/50 focus:border-primary/50 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you need"
                      rows={4}
                      required
                      className="rounded-lg border-border/50 focus:border-primary/50 transition-all duration-300"
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-full bg-primary hover:bg-primary/90 transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
