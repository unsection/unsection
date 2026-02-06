import React from 'react';

const SideMenu = () => {
  return (
    <div className="hidden lg:flex absolute left-[40px] top-[40px] flex-col items-start gap-[8px] min-w-[200px] z-10 group">
      {[
        "Hero", "Testimonials", "Feature", "Call to actions", 
        "Footer", "Blog", "Navbar", "Pricing", 
        "Logo", "FAQs", "Team", "Contact", "Works"
      ].map((item) => (
        <p key={item} className="text-2xl font-medium text-white transition-opacity duration-300 cursor-pointer group-hover:opacity-60 hover:!opacity-100">
          {item}
        </p>
      ))}
    </div>
  );
};

export default SideMenu;
