import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
}

const cadItems: PortfolioItem[] = [
  { id: 1, title: "Industrial Drone Frame", category: "Aerospace", description: "Custom-designed carbon fiber frame for heavy-lift applications" },
  { id: 2, title: "Medical Device Housing", category: "Healthcare", description: "Precision enclosure for diagnostic equipment" },
  { id: 3, title: "Custom Enclosure", category: "Electronics", description: "IP67-rated housing for outdoor sensors" },
  { id: 4, title: "Mechanical Assembly", category: "Industrial", description: "Multi-component assembly with precision tolerances" },
  { id: 5, title: "Precision Component", category: "Automotive", description: "High-performance engine component design" },
  { id: 6, title: "Robotic Arm Joint", category: "Robotics", description: "Articulated joint with integrated motor housing" },
  { id: 7, title: "Consumer Product", category: "Product Design", description: "Ergonomic handheld device enclosure" },
  { id: 8, title: "Structural Bracket", category: "Construction", description: "Load-bearing bracket for modular systems" },
  { id: 9, title: "Heat Sink Design", category: "Thermal", description: "Optimized heat dissipation for electronics" },
];

const printingItems: PortfolioItem[] = [
  { id: 1, title: "Prototype Housing", category: "Product Design", description: "Rapid prototype for consumer electronics" },
  { id: 2, title: "Functional Parts", category: "Engineering", description: "Production-ready mechanical components" },
  { id: 3, title: "Architectural Model", category: "Architecture", description: "Detailed scale model for client presentation" },
  { id: 4, title: "Custom Fixtures", category: "Manufacturing", description: "Assembly jigs for production line" },
  { id: 5, title: "Drone Components", category: "Aerospace", description: "Lightweight structural components" },
  { id: 6, title: "Medical Implant", category: "Healthcare", description: "Biocompatible custom implant prototype" },
  { id: 7, title: "Art Installation", category: "Art & Design", description: "Large-scale sculptural element" },
  { id: 8, title: "Automotive Part", category: "Automotive", description: "Custom dashboard component" },
  { id: 9, title: "Education Model", category: "Education", description: "Anatomical teaching model" },
];

const Portfolio = () => {
  const { type } = useParams<{ type: string }>();
  const isCad = type === "cad";
  const items = isCad ? cadItems : printingItems;
  const title = isCad ? "CAD Design Portfolio" : "3D Printing Portfolio";

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      
      <section className="pt-40 pb-24">
        <div className="container mx-auto px-6">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary/60 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-16">
            <span className="text-primary/60 text-sm font-semibold uppercase tracking-wider mb-2 block">
              {isCad ? "Engineering Excellence" : "Manufacturing Innovation"}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-primary">
              {title}
            </h1>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image Placeholder */}
                <div className="aspect-[4/3] from-primary/10 via-secondary to-primary/5 relative overflow-hidden">
                  {/* Grid pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`grid-full-${type}-${item.id}`} width="30" height="30" patternUnits="userSpaceOnUse">
                          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#grid-full-${type}-${item.id})`} className="text-primary" />
                    </svg>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-cream font-semibold">View Details</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-sm text-primary/60 font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-primary mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary/60 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Portfolio;