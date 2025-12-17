import React from 'react';

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
    <>
      <section id="team" className="relative bg-secondary overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span className="text-[20vw] font-bold text-primary/5 whitespace-nowrap">
          Will & Ellipse
        </span>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-0">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Meet Our Team
          </h2>
          <p className="text-primary/60 text-lg">
            The Minds Behind Will & Ellipse
          </p>
        </div>

        {/* Team Photos Container */}
        <div className="relative flex items-end justify-center min-h-[400px] md:min-h-[500px]">
          {/* Placeholder silhouettes - will be replaced with actual photos */}
          <div className="flex items-end justify-center gap-0 -mx-4">
            {/* Team member silhouettes with varying heights */}
            <div className="relative w-32 md:w-48 h-64 md:h-80 -mr-4">
              <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-primary/20 to-primary/5 rounded-t-full" />
              <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-primary/30 to-transparent rounded-t-full" />
            </div>
            
            <div className="relative w-28 md:w-40 h-56 md:h-72 -mr-4 z-10">
              <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-primary/25 to-primary/5 rounded-t-full" />
              <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-primary/35 to-transparent rounded-t-full" />
            </div>
            
            <div className="relative w-36 md:w-56 h-72 md:h-96 -mr-4 z-20">
              <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-primary/30 to-primary/5 rounded-t-full" />
              <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-primary/40 to-transparent rounded-t-full" />
            </div>
            
            <div className="relative w-28 md:w-44 h-60 md:h-80 -mr-4 z-10">
              <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-primary/25 to-primary/5 rounded-t-full" />
              <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-primary/35 to-transparent rounded-t-full" />
            </div>
            
            <div className="relative w-32 md:w-48 h-64 md:h-84">
              <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-primary/20 to-primary/5 rounded-t-full" />
              <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-primary/30 to-transparent rounded-t-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Names Bar */}
      <div className="bg-primary py-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="group">
                <h4 className="text-cream font-semibold text-sm md:text-base mb-1">
                  {member.name}
                </h4>
                <p className="text-cream/60 text-xs md:text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default TeamSection;