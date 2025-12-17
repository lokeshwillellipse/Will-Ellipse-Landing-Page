import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-golden py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Will & Ellipse
            </h3>
            <p className="text-primary/60 text-sm mb-6">
              Curves that connect and inspire
            </p>
            <p className="text-primary/60 text-sm leading-relaxed">
              Pioneering drone technology and precision manufacturing. From custom-built drones to CAD design — engineering excellence that takes your vision to new heights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-primary mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <a
                href="#services"
                className="block text-primary/70 hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="block text-primary/70 hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#team"
                className="block text-primary/70 hover:text-primary transition-colors"
              >
                Team
              </a>
              <a
                href="#contact"
                className="block text-primary/70 hover:text-primary transition-colors"
              >
                Contact Us
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-primary mb-6">Follow Us</h4>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-cream transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-primary group-hover:text-cream" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-cream transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:text-cream" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-cream transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-primary group-hover:text-cream" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-cream transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:text-cream" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary/60 text-sm">
              © {currentYear} Will & Ellipse Enterprises LLP. All rights reserved
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-primary/60 hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary/60 hover:text-primary text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-primary/60 hover:text-primary text-sm transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;