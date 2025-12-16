const teamMembers = [
  { name: "Johann", role: "Co-Founder" },
  { name: "Lokesh", role: "Co-Founder" },
  { name: "Thiruppathi", role: "Co-Founder" },
  { name: "Antrug", role: "Co-Founder" },
  { name: "Pavan", role: "Co-Founder" },
  { name: "Tobin", role: "Co-Founder" },
];

const TeamSection = () => {
  return (
    <section id="team" className="relative bg-secondary overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span className="text-[15vw] sm:text-[18vw] md:text-[20vw] font-bold text-primary/5 whitespace-nowrap">
          Will & Ellipse
        </span>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-0">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Meet Our Team
          </h2>
          <p className="text-primary/60 text-base sm:text-lg">
            The Minds Behind Will & Ellipse
          </p>
        </div>

        {/* Team Photos Container */}
        <div className="relative flex items-end justify-center min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px]">
          {/* Placeholder silhouettes - will be replaced with actual photos */}
          <div className="flex items-end justify-center gap-0 -mx-2 sm:-mx-4 scale-90 sm:scale-95 md:scale-100">
            {/* Team member silhouettes with varying heights */}
            <div className="relative w-16 sm:w-24 md:w-32 lg:w-48 h-40 sm:h-52 md:h-64 lg:h-80 -mr-2 sm:-mr-4">
              <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-primary/20 to-primary/5 rounded-t-full" />
              <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-primary/30 to-transparent rounded-t-full" />
            </div>
            
            <div className="relative w-14 sm:w-20 md:w-28 lg:w-40 h-36 sm:h-44 md:h-56 lg:h-72 -mr-2 sm:-mr-4 z-10">
              <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-primary/25 to-primary/5 rounded-t-full" />
              <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-primary/35 to-transparent rounded-t-full" />
            </div>
            
            <div className="relative w-20 sm:w-32 md:w-36 lg:w-56 h-48 sm:h-60 md:h-72 lg:h-96 -mr-2 sm:-mr-4 z-20">
              <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-primary/30 to-primary/5 rounded-t-full" />
              <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-primary/40 to-transparent rounded-t-full" />
            </div>
            
            <div className="relative w-14 sm:w-22 md:w-28 lg:w-44 h-40 sm:h-50 md:h-60 lg:h-80 -mr-2 sm:-mr-4 z-10">
              <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-primary/25 to-primary/5 rounded-t-full" />
              <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-primary/35 to-transparent rounded-t-full" />
            </div>
            
            <div className="relative w-16 sm:w-24 md:w-32 lg:w-48 h-44 sm:h-52 md:h-64 lg:h-84">
              <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-primary/20 to-primary/5 rounded-t-full" />
              <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-primary/30 to-transparent rounded-t-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Names Bar */}
      <div className="bg-primary py-4 sm:py-5 md:py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4 text-center">
            {teamMembers.map((member) => (
              <div key={member.name} className="group">
                <h4 className="text-cream font-semibold text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1">
                  {member.name}
                </h4>
                <p className="text-cream/60 text-[10px] sm:text-xs md:text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
