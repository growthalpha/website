
import React from 'react';

const Logo = () => {
  return (
    <div className="font-semibold text-2xl md:text-3xl">
      <span className="text-white">Growth</span>
      <span style={{ 
        background: 'linear-gradient(90deg, #6AE58C 0%, #5B81FD 100%)', 
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }}>Alpha</span>
    </div>
  );
};

export default Logo;
