import { Cpu, Plane, Printer, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Custom Built Drones",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    href: "#",
  },
  {
    icon: Plane,
    title: "Drone & Pilot Rental",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    href: "#",
  },
  {
    icon: Printer,
    title: "Design & Manufacturing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    href: "#",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-24 bg-cream">
      {/* Gradient at top of Services to blend from Hero into Services (services-heavy) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-0 h-40 sm:h-56 md:h-80"
        style={{
          background: `linear-gradient(180deg, hsl(var(--secondary)) 0%, hsl(var(--cream)) 100%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in-up" style={{ animationFillMode: "both", animationDelay: "0.15s" }}>
            Services We Provide
          </h2>
        </div>

        {/* Services Container - Single card with dividers */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl sm:rounded-3xl shadow-lg shadow-primary/5 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/10">
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className="group p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col items-center text-center transition-all duration-300 hover:bg-secondary/30 animate-fade-in-up"
                  style={{ animationFillMode: "both", animationDelay: `${0.15 + i * 0.08}s` }}
                >
                  {/* Icon */}
                  <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-secondary rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary/70" />
                  </div>

                  {/* Content */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-2 sm:mb-3 md:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-primary/60 leading-relaxed mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm">
                    {service.description}
                  </p>

                  {/* Link */}
                  <a
                    href={service.href}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm group/link mt-auto"
                  >
                    Explore
                    <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
