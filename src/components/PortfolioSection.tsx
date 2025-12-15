import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
}

const cadPortfolio: PortfolioItem[] = [
  { id: 1, title: "Industrial Drone Frame", category: "Aerospace" },
  { id: 2, title: "Medical Device Housing", category: "Healthcare" },
  { id: 3, title: "Custom Enclosure", category: "Electronics" },
  { id: 4, title: "Mechanical Assembly", category: "Industrial" },
  { id: 5, title: "Precision Component", category: "Automotive" },
];

const printingPortfolio: PortfolioItem[] = [
  { id: 1, title: "Prototype Housing", category: "Product Design" },
  { id: 2, title: "Functional Parts", category: "Engineering" },
  { id: 3, title: "Architectural Model", category: "Architecture" },
  { id: 4, title: "Custom Fixtures", category: "Manufacturing" },
  { id: 5, title: "Drone Components", category: "Aerospace" },
];

const PortfolioCard = ({ item, type }: { item: PortfolioItem; type: string }) => (
  <div className="group relative bg-slate-50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 h-full min-h-[180px]">
    {/* Metallic gradient overlay
    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/20" /> */}
    
    {/* Content overlay on hover */}
    <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-cream/80 text-xs font-medium">{item.category}</span>
      <h4 className="text-cream text-base font-bold">{item.title}</h4>
    </div>
  </div>
);

{/* CAD Portfolio - Layout 1: Two columns left (stacked), three items right */}
const CADPortfolioGrid = ({ items }: { items: PortfolioItem[] }) => (
  <div className="grid grid-cols- md:grid-cols-6 gap-4 auto-rows-[180px]">
    {/* Left column - two stacked items */}
    <div className="md:col-span-2 md:row-span-1">
      <PortfolioCard item={items[0]} type="cad" />
    </div>
    
    {/* Middle - tall item */}
    <div className="md:col-span-2 md:row-span-2">
      <PortfolioCard item={items[1]} type="cad" />
    </div>
    
    {/* Right side - wide item on top */}
    <div className="md:col-span-2 md:row-span-1">
      <PortfolioCard item={items[2]} type="cad" />
    </div>
    
    {/* Bottom right - two items side by side */}
    <div className="md:col-span-2 md:row-span-1">
      <PortfolioCard item={items[3]} type="cad" />
    </div>
    <div className="md:col-span-2 md:row-span-1">
      <PortfolioCard item={items[4]} type="cad" />
    </div>
  </div>
);

{/* 3D Printing Portfolio - Layout 2: Different arrangement */}
const PrintingPortfolioGrid = ({ items }: { items: PortfolioItem[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
    {/* Top left - wide item */}
    <div className="md:col-span-2 md:row-span-1">
      <PortfolioCard item={items[0]} type="printing" />
    </div>
    
    {/* Top right - tall item */}
    <div className="md:col-span-1 md:row-span-2">
      <PortfolioCard item={items[1]} type="printing" />
    </div>
    
    {/* Far right - tall item */}
    <div className="md:col-span-1 md:row-span-2">
      <PortfolioCard item={items[2]} type="printing" />
    </div>
    
    {/* Bottom left - two items */}
    <div className="md:col-span-1 md:row-span-1">
      <PortfolioCard item={items[3]} type="printing" />
    </div>
    <div className="md:col-span-1 md:row-span-1">
      <PortfolioCard item={items[4]} type="printing" />
    </div>
  </div>
);

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        {/* CAD Design Portfolio */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-primary/50 text-sm font-medium uppercase tracking-wider mb-2 block">
                Our Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                CAD Design Portfolio
              </h2>
            </div>
            <Link
              to="/portfolio/cad"
              className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm"
            >
              View All
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <CADPortfolioGrid items={cadPortfolio} />
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
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-primary/50 text-sm font-medium uppercase tracking-wider mb-2 block">
                Manufactured Excellence
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                3D Printing Portfolio
              </h2>
            </div>
            <Link
              to="/portfolio/printing"
              className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm"
            >
              View All
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <PrintingPortfolioGrid items={printingPortfolio} />
          <Link
            to="/portfolio/printing"
            className="md:hidden mt-8 inline-flex items-center gap-2 text-primary font-semibold"
          >
            View All
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
      checkbox
    </section>
  );
};

export default PortfolioSection;
