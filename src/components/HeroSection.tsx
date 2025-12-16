import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-secondary overflow-hidden flex items-center justify-center pt-20 sm:pt-24 px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuit Lines */}
        <svg
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
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

        {/* Floating geometric shapes - hidden on very small screens */}
        <div className="hidden sm:block absolute top-1/4 left-1/4 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border border-primary/20 rounded-full animate-float" />
        <div className="hidden sm:block absolute top-1/3 right-1/4 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 border border-primary/15 rotate-45 animate-float-delayed" />
        <div className="hidden md:block absolute bottom-1/4 left-1/3 w-10 md:w-16 h-10 md:h-16 bg-primary/5 rounded-lg animate-float" style={{ animationDelay: "1s" }} />
        <div className="hidden md:block absolute top-1/2 right-1/3 w-14 md:w-20 h-14 md:h-20 border-2 border-primary/10 rounded-2xl animate-float-delayed" />
        
        {/* Drone path visualization - hidden on mobile */}
        <svg className="hidden md:block absolute right-10 top-1/3 w-40 lg:w-64 h-40 lg:h-64 opacity-30" viewBox="0 0 200 200">
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
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 animate-fade-in-up" style={{ animationFillMode: "both", animationDelay: "0.2s" }}>
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-xs sm:text-sm font-medium">Innovating Aerial Technology</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 sm:mb-6 animate-fade-in-up" style={{ animationFillMode: "both", animationDelay: "0.4s" }}>
            Will & Ellipse
          </h1>
          
          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary/70 mb-3 sm:mb-4 font-light animate-fade-in-up" style={{ animationFillMode: "both", animationDelay: "0.6s" }}>
            Curves that Connect and Inspire
          </p>
          
          {/* Description */}
          <p className="text-primary/60 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 px-2 animate-fade-in-up" style={{ animationFillMode: "both", animationDelay: "0.8s" }}>
            From custom-built drones to precision CAD design and 3D printing — 
            we engineer solutions that take your vision to new heights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up" style={{ animationFillMode: "both", animationDelay: "1s" }}>
            <a
              href="#services"
              className="group w-full sm:w-auto bg-primary text-cream px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-primary border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
