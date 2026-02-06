import React from 'react';
import Image from 'next/image';

const ActionButtons = () => {
  return (
    <div className="hidden lg:inline-flex shrink-0 items-center justify-end gap-7">
      <a href="#" className="text-white text-[15px] font-semibold hover:opacity-80 transition-opacity">
        Pricing
      </a>
      <a href="#" className="text-white text-[15px] font-semibold hover:opacity-80 transition-opacity">
        Login
      </a>
      
      <button className="inline-flex shrink-0 items-center justify-center gap-1 rounded-full bg-white pl-4 pr-3 py-4 max-h-[44px] hover:bg-gray-200 transition-colors">
        <span className="text-black text-[15px] font-semibold">Join for free</span>
        <div className="w-6 h-6 relative">
          <Image src="/images/mlb6tspn-8xadbtu.svg" alt="Arrow" fill />
        </div>
      </button>
    </div>
  );
};

export default ActionButtons;
