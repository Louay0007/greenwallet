
import React from "react";

const MadeByHumans = () => {
  return (
    <section id="made-by-humans" className="w-full bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20">
      <div className="section-container opacity-0 animate-on-scroll">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
            <span>Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Built by Tunisian Innovators
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A passionate team of Tunisian developers, designers, and environmental experts working together to create a sustainable future.
          </p>
        </div>

        {/* Main Card with Enhanced Design */}
        <div className="relative">
          <div className="w-full rounded-3xl sm:rounded-[2rem] overflow-hidden relative shadow-2xl">
            {/* Background with Overlay */}
            <div 
              className="bg-no-repeat bg-cover bg-center p-8 sm:p-12 min-h-[400px] sm:min-h-[500px] flex flex-col justify-between relative"
              style={{
                backgroundImage: "url('/background-section3.png')"
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent"></div>
              
              {/* Top Section - Logo and Team Info */}
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center text-white mb-4 sm:mb-0">
                  <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 mr-3 sm:mr-4">
                    <img src="/logo.png" alt="Tunisia GreenWallet Logo" className="h-6 sm:h-8 md:h-10 w-auto invert" />
                  </div>
                  <div>
                    <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold block">
                      Tunisia GreenWallet Team
                    </span>
                    <span className="text-white/80 text-xs sm:text-sm md:text-base">
                      IEEE Student Branch - ISSAT Mateur
                    </span>
                  </div>
                </div>
                
                {/* Team Stats - Desktop */}
                <div className="hidden sm:flex items-center space-x-6 text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-sm text-white/80">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">1</div>
                    <div className="text-sm text-white/80">University</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-white/80">Tunisian</div>
                  </div>
                </div>
                
                {/* Team Stats - Mobile */}
                <div className="sm:hidden flex items-center space-x-4 text-white">
                  <div className="text-center">
                    <div className="text-lg font-bold">5+</div>
                    <div className="text-xs text-white/80">Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">100%</div>
                    <div className="text-xs text-white/80">Tunisian</div>
                  </div>
                </div>
              </div>
              
              {/* Center Section - Main Heading */}
              <div className="relative z-10 flex-1 flex items-center justify-center">
                <div className="text-center px-4">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair text-white italic font-thin leading-tight">
                    Passionate About
                    <br />
                    <span className="text-orange-400">Climate Action</span>
                  </h2>
                  <p className="text-white/90 text-base sm:text-lg md:text-xl mt-4 sm:mt-6 max-w-2xl mx-auto">
                    From AI engineers to environmental scientists, our diverse team is united by one mission: making sustainability rewarding for every Tunisian.
                  </p>
                </div>
              </div>
              
              {/* Bottom Section - Team Highlights */}
              <div className="relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">AI & ML</div>
                    <div className="text-white/80 text-xs sm:text-sm">Computer Vision Experts</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">IoT</div>
                    <div className="text-white/80 text-xs sm:text-sm">Smart Device Integration</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">Impact</div>
                    <div className="text-white/80 text-xs sm:text-sm">Environmental Science</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MadeByHumans;
