import { Cpu, Plane, Printer, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Custom Built Drones",
    description:
      "Precision-engineered drones tailored to your specific requirements. From agricultural surveying to cinematography, we build machines that exceed expectations.",
    href: "#",
  },
  {
    icon: Plane,
    title: "Drone & Pilot Rental",
    description:
      "Access our fleet of premium drones with DGCA-certified pilots. Professional aerial services for photography, mapping, and inspection.",
    href: "#",
  },
  {
    icon: Printer,
    title: "Design & Manufacturing",
    description:
      "End-to-end CAD design and 3D printing services. Transform your concepts into precision-manufactured reality with our advanced facilities.",
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
          <p className="text-primary/60 text-lg max-w-2xl mx-auto">
            Comprehensive solutions for all your aerial and manufacturing needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-primary/60 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <a
                href={service.href}
                className="inline-flex items-center gap-2 text-primary font-semibold group/link"
              >
                Explore
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;