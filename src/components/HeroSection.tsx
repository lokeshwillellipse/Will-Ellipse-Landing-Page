import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-secondary overflow-hidden flex items-center justify-center pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuit Lines */}
        <svg
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Horizontal lines */}
          <path
            d="M0 400 L400 400 L450 350 L600 350 L650 400 L1200 400"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            className="animate-draw"
            strokeDasharray="1000"
          />
          <path
            d="M0 300 L200 300 L250 250 L800 250 L850 300 L1200 300"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            className="animate-draw"
            strokeDasharray="1000"
            style={{ animationDelay: "0.5s" }}
          />
          <path
            d="M0 500 L300 500 L350 550 L700 550 L750 500 L1200 500"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            className="animate-draw"
            strokeDasharray="1000"
            style={{ animationDelay: "1s" }}
          />
          
          {/* Connection nodes */}
          <circle cx="450" cy="350" r="4" fill="hsl(var(--primary))" className="animate-pulse-slow" />
          <circle cx="650" cy="400" r="4" fill="hsl(var(--primary))" className="animate-pulse-slow" style={{ animationDelay: "1s" }} />
          <circle cx="250" cy="250" r="4" fill="hsl(var(--primary))" className="animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
          <circle cx="350" cy="550" r="4" fill="hsl(var(--primary))" className="animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        </svg>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-primary/15 rotate-45 animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-primary/5 rounded-lg animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border-2 border-primary/10 rounded-2xl animate-float-delayed" />
        
        {/* Drone path visualization */}
        <svg className="absolute right-10 top-1/3 w-64 h-64 opacity-30" viewBox="0 0 200 200">
          <ellipse
            cx="100"
            cy="100"
            rx="80"
            ry="40"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5,5"
            className="animate-[spin_20s_linear_infinite]"
          />
          <circle cx="180" cy="100" r="6" fill="hsl(var(--primary))" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up" style={{ animationFillMode: "both", animationDelay: "0.2s" }}>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-medium">Innovating Aerial Technology</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 animate-fade-in-up" style={{ animationFillMode: "both", animationDelay: "0.4s" }}>
            Will & Ellipse
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary/70 mb-4 font-light animate-fade-in-up" style={{ animationFillMode: "both", animationDelay: "0.6s" }}>
            Curves that Connect and Inspire
          </p>
          
          {/* Description */}
          <p className="text-primary/60 text-lg max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationFillMode: "both", animationDelay: "0.8s" }}>
            From custom-built drones to precision CAD design and 3D printing — 
            we engineer solutions that take your vision to new heights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationFillMode: "both", animationDelay: "1s" }}>
            <a
              href="#services"
              className="group bg-primary text-cream px-8 py-4 rounded-xl text-base font-semibold hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 flex items-center gap-2"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl text-base font-semibold text-primary border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* (Gradient removed from here — now applied on Services section to favor the services side) */}
    </section>
  );
};

export default HeroSection;