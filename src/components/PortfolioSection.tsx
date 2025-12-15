import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  span: "normal" | "wide" | "tall" | "large";
}

const cadPortfolio: PortfolioItem[] = [
  { id: 1, title: "Industrial Drone Frame", category: "Aerospace", span: "large" },
  { id: 2, title: "Medical Device Housing", category: "Healthcare", span: "normal" },
  { id: 3, title: "Custom Enclosure", category: "Electronics", span: "tall" },
  { id: 4, title: "Mechanical Assembly", category: "Industrial", span: "wide" },
  { id: 5, title: "Precision Component", category: "Automotive", span: "normal" },
];

const printingPortfolio: PortfolioItem[] = [
  { id: 1, title: "Prototype Housing", category: "Product Design", span: "wide" },
  { id: 2, title: "Functional Parts", category: "Engineering", span: "normal" },
  { id: 3, title: "Architectural Model", category: "Architecture", span: "large" },
  { id: 4, title: "Custom Fixtures", category: "Manufacturing", span: "normal" },
  { id: 5, title: "Drone Components", category: "Aerospace", span: "tall" },
];

const getSpanClasses = (span: string) => {
  switch (span) {
    case "large":
      return "md:col-span-2 md:row-span-2";
    case "wide":
      return "md:col-span-2";
    case "tall":
      return "md:row-span-2";
    default:
      return "";
  }
};

interface PortfolioGridProps {
  items: PortfolioItem[];
  type: "cad" | "printing";
}

const PortfolioGrid = ({ items, type }: PortfolioGridProps) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {items.map((item) => (
      <div
        key={item.id}
        className={`group relative bg-primary/5 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 ${getSpanClasses(
          item.span
        )} ${item.span === "large" || item.span === "tall" ? "min-h-[300px]" : "min-h-[200px]"}`}
      >
        {/* Placeholder gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary to-primary/5" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`grid-${type}-${item.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${type}-${item.id})`} className="text-primary" />
          </svg>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-cream/80 text-sm font-medium">{item.category}</span>
          <h4 className="text-cream text-lg font-bold">{item.title}</h4>
        </div>
      </div>
    ))}
  </div>
);

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        {/* CAD Design Portfolio */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-primary/60 text-sm font-semibold uppercase tracking-wider mb-2 block">
                Our Work
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                CAD Design Portfolio
              </h2>
            </div>
            <Link
              to="/portfolio/cad"
              className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
          <PortfolioGrid items={cadPortfolio} type="cad" />
          <Link
            to="/portfolio/cad"
            className="md:hidden mt-8 inline-flex items-center gap-2 text-primary font-semibold"
          >
            View All
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        {/* 3D Printing Portfolio */}
        <div>
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-primary/60 text-sm font-semibold uppercase tracking-wider mb-2 block">
                Manufactured Excellence
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                3D Printing Portfolio
              </h2>
            </div>
            <Link
              to="/portfolio/printing"
              className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
          <PortfolioGrid items={printingPortfolio} type="printing" />
          <Link
            to="/portfolio/printing"
            className="md:hidden mt-8 inline-flex items-center gap-2 text-primary font-semibold"
          >
            View All
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;