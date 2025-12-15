import { useState } from "react";
import { ChevronDown, Plane, Users, Cpu, Printer, Building2 } from "lucide-react";
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    icon: Building2,
    href: "#contact",
    fullWidth: true,
  },
];

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      {/* Navbar */}
      <div className="bg-primary rounded-2xl px-8 py-4 shadow-2xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-cream text-3xl font-bold tracking-tight">W&</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              to="/"
              className="text-cream/80 hover:text-cream transition-colors duration-300 text-base font-medium"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-2 text-cream/80 hover:text-cream transition-colors duration-300 text-base font-medium">
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ease-out ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-screen max-w-xl transition-all duration-300 ${
                  isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="bg-primary rounded-2xl p-6 shadow-2xl border border-cream/10">
                  <div className="grid grid-cols-2 gap-1">
                    {services.slice(0, 4).map((service, index) => (
                      <a
                        key={service.title}
                        href={service.href}
                        className="group flex items-start gap-3 p-4 rounded-xl hover:bg-cream/5 transition-all duration-300"
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
                      className="group flex items-start gap-3 p-4 rounded-xl hover:bg-cream/5 transition-all duration-300"
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

            <a
              href="#team"
              className="text-cream/80 hover:text-cream transition-colors duration-300 text-base font-medium"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-cream/80 hover:text-cream transition-colors duration-300 text-base font-medium"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="bg-cream text-primary px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-cream/90 transition-all duration-300 hover:shadow-lg hover:shadow-cream/20"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
