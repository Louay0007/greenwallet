import React from "react";

const CTA = () => {
  return (
    <section className="section-container">
      <div className="glass-card p-8 md:p-10 flex flex-col md:flex-row items-center justify-between text-left">
        <div>
          <h3 className="text-2xl md:text-3xl font-display font-semibold">Ready to become a Climate Hero?</h3>
          <p className="mt-2 text-gray-600">Join squads, complete quests, and turn impact into rewards.</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">
          <a href="/signup" className="button-primary">Get Started</a>
          <a href="/sign-in" className="button-secondary">I already have an account</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;


