import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState, useCallback, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

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

const PortfolioCard = ({ item }: { item: PortfolioItem }) => (
  <div className="group relative bg-slate-100 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 h-[200px] sm:h-[240px] md:h-[280px]">
    {/* Content overlay on hover */}
    <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-cream/80 text-xs font-medium">{item.category}</span>
      <h4 className="text-cream text-sm sm:text-base font-bold">{item.title}</h4>
    </div>
  </div>
);

const PortfolioCarousel = ({ 
  items, 
  title, 
  subtitle, 
  linkTo 
}: { 
  items: PortfolioItem[]; 
  title: string; 
  subtitle: string;
  linkTo: string;
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  return (
    <div className="mb-16 sm:mb-20 md:mb-24">
      {/* Header with View All and Navigation */}
      <div className="flex items-end justify-between mb-6 sm:mb-8">
        <div>
          <span className="text-primary/50 text-xs sm:text-sm font-medium uppercase tracking-wider mb-1 sm:mb-2 block">
            {subtitle}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            {title}
          </h2>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to={linkTo}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-primary font-semibold hover:gap-2 sm:hover:gap-3 transition-all text-xs sm:text-sm"
          >
            View All
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
          
          {/* Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => api?.scrollPrev()}
              disabled={!canScrollPrev}
              className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-cream disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              disabled={!canScrollNext}
              className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-cream disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-3 sm:-ml-4">
          {items.map((item) => (
            <CarouselItem key={item.id} className="pl-3 sm:pl-4 basis-[75%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <PortfolioCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Mobile Navigation Dots */}
      <div className="flex sm:hidden justify-center gap-2 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === (api?.selectedScrollSnap() ?? 0)
                ? "bg-primary w-6"
                : "bg-primary/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative py-16 sm:py-20 md:py-24 bg-cream">
      {/* Subtle gradient at bottom of Portfolio to hint the next section */}
      <div
        className="pointer-events-none absolute left-0 right-0 bottom-0 h-24 sm:h-36 md:h-56"
        style={{
          background: `linear-gradient(0deg, hsl(var(--secondary)) 0%, hsla(var(--secondary) / 0) 100%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* CAD Design Portfolio */}
        <PortfolioCarousel
          items={cadPortfolio}
          title="CAD Design Portfolio"
          subtitle="Our Work"
          linkTo="/portfolio/cad"
        />

        {/* 3D Printing Portfolio */}
        <PortfolioCarousel
          items={printingPortfolio}
          title="3D Printing Portfolio"
          subtitle="Manufactured Excellence"
          linkTo="/portfolio/printing"
        />
      </div>
    </section>
  );
};

export default PortfolioSection;
