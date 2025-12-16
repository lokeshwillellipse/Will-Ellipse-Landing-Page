import { Shield, Clock, Award, Headphones, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "Comprehensive liability coverage on all rentals. Fly with complete peace of mind.",
    highlight: false,
  },
  {
    icon: Clock,
    title: "Flexible Terms",
    description:
      "Rent by the hour, day, or month. Scale up or down based on project needs.",
    highlight: false,
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Dedicated support team available around the clock for mission-critical operations.",
    highlight: true,
  },
  {
    icon: Award,
    title: "DGCA Certified",
    description:
      "All pilots hold valid DGCA licenses with verified flight hours and safety records.",
    highlight: false,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary/60 text-sm font-semibold uppercase tracking-wider mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Built for Professionals
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Large Feature Card */}
          <div className="md:col-span-2 bg-primary rounded-3xl p-8 text-cream group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
            <span className="text-cream/60 text-sm font-medium mb-4 block">
              Premium Fleet
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 max-w-md">
              Enterprise-grade drones from world-leading manufacturers
            </h3>
            <p className="text-cream/70 mb-8 max-w-md">
              From compact Mavics to heavy-lift cinematography platforms — equipment for every mission profile.
            </p>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 text-cream font-semibold group/link"
            >
              View Fleet
              <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Small Feature Card */}
          <div className="bg-card rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">DGCA Certified</h3>
              <p className="text-primary/60 text-sm">
                All pilots hold valid DGCA licenses with verified flight hours and safety records.
              </p>
            </div>
          </div>

          {/* Feature Cards Row */}
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={feature.title}
              className={`rounded-3xl p-8 transition-all duration-500 hover:shadow-xl ${
                feature.highlight
                  ? "bg-golden hover:shadow-golden/20"
                  : "bg-card hover:shadow-primary/10"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                  feature.highlight ? "bg-primary/10" : "bg-primary/10"
                }`}
              >
                <feature.icon
                  className={`w-6 h-6 ${
                    feature.highlight ? "text-primary" : "text-primary"
                  }`}
                />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-primary/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;