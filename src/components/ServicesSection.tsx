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
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Services We Provide
          </h2>
        </div>

        {/* Services Container - Single card with dividers */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl shadow-lg shadow-primary/5 overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/10">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group p-8 md:p-10 flex flex-col items-center text-center transition-all duration-300 hover:bg-secondary/30"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary/70" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-primary/60 leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>

                  {/* Link */}
                  <a
                    href={service.href}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link mt-auto"
                  >
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
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
