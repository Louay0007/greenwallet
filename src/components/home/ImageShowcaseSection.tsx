
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            See Tunisia's Green Revolution in Action
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Watch how citizens across Tunisia are transforming everyday actions into measurable climate impact, 
            earning rewards while building a sustainable future for our nation.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src="/ecoact.jpg" 
              alt="Tunisia GreenWallet - Citizens using smart bins and mobile app for eco-actions" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Smart Technology, Real Impact</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Powered by AI verification and IoT integration, Tunisia GreenWallet makes climate action 
              accessible and rewarding. From smart recycling bins in Tunis to photo verification in Sfax, 
              every eco-action contributes to our national sustainability goals while earning you GreenCoins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
