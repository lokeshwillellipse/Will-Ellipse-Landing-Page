import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-golden py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">
              Will & Ellipse
            </h3>
            <p className="text-primary/60 text-xs sm:text-sm mb-4 sm:mb-6">
              Curves that connect and inspire
            </p>
            <p className="text-primary/60 text-xs sm:text-sm leading-relaxed">
              Pioneering drone technology and precision manufacturing. From custom-built drones to CAD design — engineering excellence that takes your vision to new heights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-primary mb-4 sm:mb-6 text-sm sm:text-base">Quick Links</h4>
            <nav className="space-y-2 sm:space-y-3">
              <a
                href="#services"
                className="block text-primary/70 hover:text-primary transition-colors text-sm"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="block text-primary/70 hover:text-primary transition-colors text-sm"
              >
                About
              </a>
              <a
                href="#team"
                className="block text-primary/70 hover:text-primary transition-colors text-sm"
              >
                Team
              </a>
              <a
                href="#contact"
                className="block text-primary/70 hover:text-primary transition-colors text-sm"
              >
                Contact Us
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-primary mb-4 sm:mb-6 text-sm sm:text-base">Follow Us</h4>
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="#"
                className="w-9 sm:w-10 h-9 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-cream transition-all duration-300 group"
              >
                <Facebook className="w-4 sm:w-5 h-4 sm:h-5 text-primary group-hover:text-cream" />
              </a>
              <a
                href="#"
                className="w-9 sm:w-10 h-9 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-cream transition-all duration-300 group"
              >
                <Instagram className="w-4 sm:w-5 h-4 sm:h-5 text-primary group-hover:text-cream" />
              </a>
              <a
                href="#"
                className="w-9 sm:w-10 h-9 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-cream transition-all duration-300 group"
              >
                <Twitter className="w-4 sm:w-5 h-4 sm:h-5 text-primary group-hover:text-cream" />
              </a>
              <a
                href="#"
                className="w-9 sm:w-10 h-9 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-cream transition-all duration-300 group"
              >
                <Linkedin className="w-4 sm:w-5 h-4 sm:h-5 text-primary group-hover:text-cream" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary/60 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Will & Ellipse Enterprises LLP. All rights reserved
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="#"
                className="text-primary/60 hover:text-primary text-xs sm:text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary/60 hover:text-primary text-xs sm:text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-primary/60 hover:text-primary text-xs sm:text-sm transition-colors hidden sm:block"
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
