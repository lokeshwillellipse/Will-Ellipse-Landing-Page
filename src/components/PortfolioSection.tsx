import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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

/* CAD Portfolio - Layout 1: Two columns left (stacked), three items right */
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

/* 3D Printing Portfolio - Layout 2: Different arrangement */
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
  const cadRef = useRef<HTMLDivElement | null>(null);
  const printingRef = useRef<HTMLDivElement | null>(null);
  const [cadIndex, setCadIndex] = useState(0);
  const [printingIndex, setPrintingIndex] = useState(0);

  useEffect(() => {
    const el = cadRef.current;
    if (!el) return;

    const init = () => {
      const child = el.querySelector('[data-card]') as HTMLElement | null;
      const gap = 16;
      const w = child ? child.clientWidth + gap : el.clientWidth;
      // start at the first slide
      el.scrollTo({ left: 0, behavior: 'auto' });
      setCadIndex(0);
    };

    const onScroll = () => {
      const child = el.querySelector('[data-card]') as HTMLElement | null;
      const gap = 16; // matches gap-4
      const w = child ? child.clientWidth + gap : el.clientWidth;
      const idx = Math.round(el.scrollLeft / w);
      const n = cadPortfolio.length;

      setCadIndex(Math.min(Math.max(idx, 0), n - 1));
    };

    init();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', init);
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', init);
    };
  }, []);

  useEffect(() => {
    const el = printingRef.current;
    if (!el) return;

    const init = () => {
      const child = el.querySelector('[data-card]') as HTMLElement | null;
      const gap = 16;
      const w = child ? child.clientWidth + gap : el.clientWidth;
      el.scrollTo({ left: 0, behavior: 'auto' });
      setPrintingIndex(0);
    };

    const onScroll = () => {
      const child = el.querySelector('[data-card]') as HTMLElement | null;
      const gap = 16;
      const w = child ? child.clientWidth + gap : el.clientWidth;
      const idx = Math.round(el.scrollLeft / w);
      const n = printingPortfolio.length;

      setPrintingIndex(Math.min(Math.max(idx, 0), n - 1));
    };

    init();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', init);
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', init);
    };
  }, []);
  return (
    
    <section id="portfolio" className="relative py-24 bg-cream">
      {/* Subtle gradient at bottom of Portfolio to hint the next section */}
      <div
        className="pointer-events-none absolute left-0 right-0 bottom-0 h-36 md:h-56"
        style={{
          background: `linear-gradient(0deg, hsl(var(--secondary)) 0%, hsla(var(--secondary) / 0) 100%)`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
          {/* CAD Design Portfolio */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8 relative">
            <div>
              <span className="text-primary/50 text-sm font-medium uppercase tracking-wider mb-2 block">
                Our Work
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-primary">
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
            {/* Mobile View All - inline on mobile */}
            <Link to="/portfolio/cad" className="md:hidden inline-flex items-center gap-2 text-primary font-semibold text-sm mt-4">
              View All
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          {/* Grid for md+ */}
          <div className="hidden md:block">
            <CADPortfolioGrid items={cadPortfolio} />
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden">
            <div className="relative">
              <div
                ref={cadRef}
                className="mt-4 flex gap-4 overflow-x-auto px-0 pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
                role="list"
              >
                {cadPortfolio.map((item) => (
                  <div key={item.id} data-card className="snap-center min-w-[85%]">
                    <PortfolioCard item={item} type="cad" />
                  </div>
                ))}
              </div>
              {/* Indicators */}
              <div className="flex items-center justify-center gap-2 mt-3">
                {cadPortfolio.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => {
                      const el = cadRef.current;
                      if (!el) return;
                      const child = el.querySelector('[data-card]') as HTMLElement | null;
                      const gap = 16;
                      const w = child ? child.clientWidth + gap : el.clientWidth;
                      el.scrollTo({ left: i * w, behavior: 'smooth' });
                    }}
                    className={`w-2 h-2 rounded-full ${cadIndex === i ? 'bg-primary' : 'bg-primary/30'}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* 3D Printing Portfolio */}
        <div>
          <div className="flex items-center justify-between mb-8 relative">
            <div>
              <span className="text-primary/50 text-sm font-medium uppercase tracking-wider mb-2 block">
                Manufactured Excellence
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-primary">
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
            <Link to="/portfolio/printing" className="md:hidden inline-flex items-center gap-2 text-primary font-semibold text-sm mt-4">
              View All
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="hidden md:block">
            <PrintingPortfolioGrid items={printingPortfolio} />
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden">
            <div className="relative">
              <div
                ref={printingRef}
                className="mt-4 flex gap-4 overflow-x-auto px-0 pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
                role="list"
              >
                {printingPortfolio.map((item) => (
                  <div key={item.id} data-card className="snap-center min-w-[85%]">
                    <PortfolioCard item={item} type="printing" />
                  </div>
                ))}
              </div>



              <div className="flex items-center justify-center gap-2 mt-3">
                {printingPortfolio.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => {
                      const el = printingRef.current;
                      if (!el) return;
                      const child = el.querySelector('[data-card]') as HTMLElement | null;
                      const gap = 16;
                      const w = child ? child.clientWidth + gap : el.clientWidth;
                      el.scrollTo({ left: i * w, behavior: 'smooth' });
                    }}
                    className={`w-2 h-2 rounded-full ${printingIndex === i ? 'bg-primary' : 'bg-primary/30'}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
