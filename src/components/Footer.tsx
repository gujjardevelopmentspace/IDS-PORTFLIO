import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Github, Youtube, Mail } from "lucide-react";
import idsLogo from "@/assets/ids-logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border">
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={idsLogo} 
              alt="INVENTOR Design Studio" 
              className="h-12 sm:h-16 mb-2"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              INVENTOR Design Studio - a creative technology studio bridging software development and visual storytelling.
              We build digital products and create cinematic content.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-2">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-foreground transition-colors flex items-center gap-2">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors flex items-center gap-2">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-foreground transition-colors flex items-center gap-2">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">What We Do</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Software Development</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Video Production</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Creative Agency</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Digital Innovation</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <a 
              href="mailto:contact@inventordesign.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 mb-4"
            >
              <Mail size={16} />
              contact@inventordesign.com
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ready to start your project? Let's create something extraordinary together.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-muted-foreground px-4 sm:px-0">
          <p className="mb-3 md:mb-0">&copy; {new Date().getFullYear()} INVENTOR Design Studio. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
