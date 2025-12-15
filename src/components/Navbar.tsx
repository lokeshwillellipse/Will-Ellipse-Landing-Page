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
      <div className="bg-slate-900 rounded-2xl px-8 py-4 shadow-2xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-golden text-3xl font-bold tracking-tight">W&</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              to="/"
              className="text-slate-200 hover:text-cream transition-colors duration-300 text-base font-medium"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-2 text-slate-200 hover:text-cream transition-colors duration-300 text-base font-medium">
                Services
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ease-out ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-screen max-w-2xl">
                  <div className="bg-slate-950 rounded-2xl p-8 shadow-2xl border border-slate-800 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="grid grid-cols-2 gap-6">
                      {services.slice(0, 4).map((service, index) => (
                        <a
                          key={service.title}
                          href={service.href}
                          className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                          style={{
                            animation: `slideInUp 0.4s ease-out ${index * 75}ms forwards`,
                            opacity: 0,
                          }}
                        >
                          <div className="p-3 rounded-lg bg-slate-800 group-hover:bg-slate-700 transition-all duration-300 flex-shrink-0">
                            <service.icon className="w-6 h-6 text-slate-300 group-hover:text-cream transition-colors" />
                          </div>
                          <div>
                            <h4 className="text-slate-100 font-semibold text-base mb-1 group-hover:text-cream transition-colors">
                              {service.title}
                            </h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                    
                    {/* Enterprise Solution - Full Width */}
                    <div
                      className="mt-6 pt-6 border-t border-slate-800"
                      style={{
                        animation: `slideInUp 0.4s ease-out 300ms forwards`,
                        opacity: 0,
                      }}
                    >
                      <a
                        href="#contact"
                        className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                      >
                        <div className="p-3 rounded-lg bg-slate-800 group-hover:bg-slate-700 transition-all duration-300 flex-shrink-0">
                          <Building2 className="w-6 h-6 text-slate-300 group-hover:text-cream transition-colors" />
                        </div>
                        <div>
                          <h4 className="text-slate-100 font-semibold text-base mb-1 group-hover:text-cream transition-colors">
                            Enterprise Solutions
                          </h4>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {services[4].description}
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#team"
              className="text-slate-200 hover:text-cream transition-colors duration-300 text-base font-medium"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-slate-200 hover:text-cream transition-colors duration-300 text-base font-medium"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="bg-cream text-slate-900 px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-cream/90 transition-all duration-300 hover:shadow-lg hover:shadow-cream/30 hover:scale-105 transform"
          >
            Get a Quote
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in {
          animation: slideInUp 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;