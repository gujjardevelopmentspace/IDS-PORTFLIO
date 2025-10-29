import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Github, Youtube, Mail, Phone, MapPin, ArrowUpRight, ExternalLink, Heart } from "lucide-react";
import idsLogo from "@/assets/ids-logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-14">
          {/* Brand */}
          <div className="space-y-4 sm:space-y-5 col-span-2 md:col-span-1">
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              src={idsLogo} 
              alt="INVENTOR Design Studio" 
              className="h-12 sm:h-14 md:h-16 mb-2 sm:mb-3"
            />
            <p className="text-xs sm:text-sm text-muted-foreground/90 leading-relaxed">
              INVENTOR Design Studio - a creative technology studio bridging software development and visual storytelling.
              We build digital products and create cinematic content.
            </p>
            <div className="flex space-x-3 sm:space-x-4 pt-2 sm:pt-3">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/70 hover:bg-primary/10 flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="GitHub"
              >
                <Github size={16} className="sm:size-18 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/70 hover:bg-primary/10 flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="sm:size-18 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/70 hover:bg-primary/10 flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Instagram"
              >
                <Instagram size={16} className="sm:size-18 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/70 hover:bg-primary/10 flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="YouTube"
              >
                <Youtube size={16} className="sm:size-18 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-5 relative inline-block">
              Navigation
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-primary/80 to-transparent"></span>
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-5 relative inline-block">
              What We Do
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-primary/80 to-transparent"></span>
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                Software Development
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                Video Production
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                Creative Agency
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                Digital Innovation
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-5 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-primary/80 to-transparent"></span>
            </h4>
            <a 
              href="mailto:contact@inventordesign.com"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors flex items-center mb-3 sm:mb-4 group"
            >
              <div className="w-6 flex justify-center mr-2">
                <Mail size={14} className="sm:size-16 group-hover:text-primary transition-colors" />
              </div>
              <span>contact@inventordesign.com</span>
              <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
            </a>
            <a 
              href="tel:+1234567890"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors flex items-center mb-3 sm:mb-4 group"
            >
              <div className="w-6 flex justify-center mr-2">
                <Phone size={14} className="sm:size-16 group-hover:text-primary transition-colors" />
              </div>
              <span>+1 (234) 567-890</span>
              <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
            </a>
            <a 
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group"
            >
              <div className="w-6 flex justify-center mr-2">
                <MapPin size={14} className="sm:size-16 group-hover:text-primary transition-colors" />
              </div>
              <span>New York, NY</span>
              <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
            </a>
          </div>
        </div>

        {/* Newsletter - New Section */}
        <div className="mt-10 sm:mt-12 md:mt-16 p-6 sm:p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Subscribe to our newsletter for the latest updates and insights.</p>
            </div>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 h-10 px-3 py-2 text-sm rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="h-10 px-4 py-2 text-sm font-medium rounded-lg bg-primary/90 hover:bg-primary text-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} INVENTOR Design Studio. All rights reserved.
            <span className="hidden sm:inline-flex items-center text-xs text-muted-foreground/70 ml-2">
              Made with <Heart size={12} className="mx-1 text-red-500" /> in New York
            </span>
          </p>
          <div className="flex space-x-6 sm:space-x-8 mt-4 sm:mt-0">
            <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
