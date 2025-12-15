import { useState } from "react";
import { ChevronDown, Plane, Users, Cpu, Printer, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Drone Rental Services",
    description: "Premium drones for aerial photography and surveying",
    icon: Plane,
    href: "#services",
  },
  {
    title: "Licensed Pilot Rental",
    description: "DGCA certified pilots for your operations",
    icon: Users,
    href: "#services",
  },
  {
    title: "Custom Built Drones",
    description: "Tailored drone solutions for specific needs",
    icon: Cpu,
    href: "#services",
  },
  {
    title: "Design & Manufacturing",
    description: "CAD design and 3D printing services",
    icon: Printer,
    href: "#services",
  },
  {
    title: "Enterprise Solutions",
    description: "End-to-end drone solutions for businesses with complete support and maintenance",
    icon: Building2,
    href: "#contact",
    fullWidth: true,
  },
];

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div className="bg-primary rounded-2xl px-6 py-4 shadow-2xl shadow-primary/20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-cream text-2xl font-bold tracking-tight">
              W<span className="text-golden">E</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-cream/90 hover:text-cream transition-colors duration-200 text-sm font-medium"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-cream/90 hover:text-cream transition-colors duration-200 text-sm font-medium">
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                  isServicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-primary rounded-2xl p-6 min-w-[500px] shadow-2xl shadow-primary/30 border border-cream/10">
                  <div className="grid grid-cols-2 gap-4">
                    {services.slice(0, 4).map((service, index) => (
                      <a
                        key={service.title}
                        href={service.href}
                        className={`group flex items-start gap-3 p-3 rounded-xl hover:bg-cream/5 transition-all duration-200 ${
                          isServicesOpen ? "animate-fade-in" : ""
                        }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="p-2 rounded-lg bg-cream/10 group-hover:bg-cream/15 transition-colors">
                          <service.icon className="w-5 h-5 text-cream" />
                        </div>
                        <div>
                          <h4 className="text-cream font-medium text-sm mb-0.5">
                            {service.title}
                          </h4>
                          <p className="text-cream/60 text-xs leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  
                  {/* Enterprise Solution - Full Width */}
                  <div className="mt-4 pt-4 border-t border-cream/10">
                    <a
                      href="#contact"
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-cream/5 transition-all duration-200"
                    >
                      <div className="p-2 rounded-lg bg-cream/10 group-hover:bg-cream/15 transition-colors">
                        <Building2 className="w-5 h-5 text-cream" />
                      </div>
                      <div>
                        <h4 className="text-cream font-medium text-sm mb-0.5">
                          Enterprise Solutions
                        </h4>
                        <p className="text-cream/60 text-xs leading-relaxed">
                          End-to-end drone solutions for businesses with complete support and maintenance
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#team"
              className="text-cream/90 hover:text-cream transition-colors duration-200 text-sm font-medium"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-cream/90 hover:text-cream transition-colors duration-200 text-sm font-medium"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="bg-cream text-primary px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-cream/90 transition-all duration-200 hover:shadow-lg hover:shadow-cream/20"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;