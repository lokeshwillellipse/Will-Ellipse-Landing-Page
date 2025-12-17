import { useState, useRef, useEffect } from "react";
import { ChevronDown, Plane, Users, Cpu, Printer, Building2, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Drone Rental Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: Plane,
    href: "#services",
  },
  {
    title: "Licensed Pilot Rental",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: Users,
    href: "#services",
  },
  {
    title: "Custom Built Drones",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: Cpu,
    href: "#services",
  },
  {
    title: "Design & Manufacturing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: Printer,
    href: "#services",
  },
  {
    title: "Enterprise Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: Building2,
    href: "#contact",
    fullWidth: true,
  },
];

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeTimeout = useRef<number | null>(null);

  const openServices = () => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setIsServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    if (closeTimeout.current) window.clearTimeout(closeTimeout.current);
    closeTimeout.current = window.setTimeout(() => {
      setIsServicesOpen(false);
      closeTimeout.current = null;
    }, 10);
  };

  useEffect(() => {
    return () => {
      if (closeTimeout.current) window.clearTimeout(closeTimeout.current);
    };
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-4 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-[95%] max-w-6xl">
      {/* Navbar */}
      <div className="bg-primary rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 shadow-2xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="Home">
            <img src={new URL('../assets/logo.svg', import.meta.url).href} alt="Will & Ellipse" className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0 mr-2 sm:mr-4" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="group text-cream/80 hover:text-cream transition-colors duration-300 text-base font-medium">
              <span className="relative inline-flex flex-col items-center">
                <span>Home</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] w-0 bg-cream transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              {/* Small invisible hover buffer under the Services button to bridge the gap only under the button */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 h-6 w-20 sm:w-28 rounded-md pointer-events-none" />

              <button
                onMouseEnter={() => openServices()}
                onMouseLeave={() => scheduleCloseServices()}
                className="flex items-center gap-2 text-cream/80 hover:text-cream transition-colors duration-300 text-base font-medium group"
              >
                <span className="relative inline-flex flex-col items-center">
                  <span>Services</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] w-0 bg-cream transition-all duration-300 group-hover:w-full" />
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ease-out ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                onMouseEnter={() => openServices()}
                onMouseLeave={() => scheduleCloseServices()}
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-8 w-screen max-w-xl transition-all duration-300 ${
                  isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="bg-primary rounded-2xl p-4 shadow-2xl border border-cream/10">
                  <div className="grid grid-cols-2 gap-2">
                    {services.slice(0, 4).map((service, index) => (
                      <a
                        key={service.title}
                        href={service.href}
                        className="group flex items-start gap-3 p-4 rounded-xl border border-transparent hover:bg-cream/5 hover:border-cream/20 transition-all duration-300 hover:shadow-sm hover:translate-y-[-2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-cream/20"
                        style={{
                          animationDelay: `${index * 50}ms`,
                        }}
                      >
                        <div className="p-2.5 rounded-lg bg-cream/10 group-hover:bg-cream/20 transition-all duration-300 flex-shrink-0">
                          <service.icon className="w-5 h-5 text-cream/70 group-hover:text-cream transition-colors" />
                        </div>
                        <div>
                          <h4 className="text-cream font-semibold text-sm mb-0.5 group-hover:text-cream transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-cream/50 text-xs leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  
                  {/* Enterprise Solution - Full Width */}
                  <div className="mt-2 pt-2 border-t border-cream/10">
                      <a
                        href="#contact"
                        className="group flex items-start gap-3 p-4 rounded-xl border border-transparent hover:bg-cream/5 hover:border-cream/20 transition-all duration-300 hover:shadow-sm hover:translate-y-[-2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-cream/20"
                      >
                      <div className="p-2.5 rounded-lg bg-cream/10 group-hover:bg-cream/20 transition-all duration-300 flex-shrink-0">
                        <Building2 className="w-5 h-5 text-cream/70 group-hover:text-cream transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-cream font-semibold text-sm mb-0.5 group-hover:text-cream transition-colors">
                          Enterprise Solutions
                        </h4>
                        <p className="text-cream/50 text-xs leading-relaxed">
                          {services[4].description}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Link to="#team" className="group text-cream/80 hover:text-cream transition-colors duration-300 text-base font-medium">
              <span className="relative inline-flex flex-col items-center">
                <span>Team</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] w-0 bg-cream transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
            <a href="#contact" className="group text-cream/80 hover:text-cream transition-colors duration-300 text-base font-medium">
              <span className="relative inline-flex flex-col items-center">
                <span>Contact</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] w-0 bg-cream transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          </div>

          {/* CTA Button - Desktop */}
          <a
            href="#contact"
            className="hidden sm:block bg-cream text-primary px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 hover:bg-cream/90 hover:text-slate-900"
          >
            Get a Quote
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-cream"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 mt-2 bg-primary rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible max-h-[80vh]" : "opacity-0 invisible max-h-0"
        }`}
      >
        <div className="p-4 space-y-3">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="block text-cream/80 hover:text-cream py-2 text-base font-medium"
          >
            Home
          </Link>
          <a
            href="#services"
            onClick={closeMobileMenu}
            className="block text-cream/80 hover:text-cream py-2 text-base font-medium"
          >
            Services
          </a>
          <a
            href="#team"
            onClick={closeMobileMenu}
            className="block text-cream/80 hover:text-cream py-2 text-base font-medium"
          >
            Team
          </a>
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="block text-cream/80 hover:text-cream py-2 text-base font-medium"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="block bg-cream text-primary px-4 py-3 rounded-xl text-sm font-semibold text-center mt-4"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
