import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Github, Youtube, Mail, Phone, MapPin } from "lucide-react";
import idsLogo from "@/assets/ids-logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border">
      
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 col-span-2 md:col-span-1">
            <img 
              src={idsLogo} 
              alt="INVENTOR Design Studio" 
              className="h-10 sm:h-12 md:h-16 mb-1 sm:mb-2"
            />
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              INVENTOR Design Studio - a creative technology studio bridging software development and visual storytelling.
              We build digital products and create cinematic content.
            </p>
            <div className="flex space-x-3 sm:space-x-4 pt-1 sm:pt-2">
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-card border border-border hover:border-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={16} className="sm:size-18" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-card border border-border hover:border-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="sm:size-18" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-card border border-border hover:border-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={16} className="sm:size-18" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-card border border-border hover:border-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube size={16} className="sm:size-18" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-2 sm:mb-4">Navigation</h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
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
            <h4 className="font-semibold text-sm sm:text-base mb-2 sm:mb-4">What We Do</h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Software Development</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Video Production</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Creative Agency</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Digital Innovation</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-2 sm:mb-4">Get In Touch</h4>
            <a 
              href="mailto:contact@inventordesign.com"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 mb-3 sm:mb-4"
            >
              <Mail size={14} className="sm:size-16" />
              contact@inventordesign.com
            </a>
            <a 
              href="tel:+1234567890"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 mb-3 sm:mb-4"
            >
              <Phone size={14} className="sm:size-16" />
              +1 (234) 567-890
            </a>
            <a 
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <MapPin size={14} className="sm:size-16" />
              New York, NY
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-6 sm:mt-8 md:mt-12 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} INVENTOR Design Studio. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6 mt-3 sm:mt-0">
            <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
