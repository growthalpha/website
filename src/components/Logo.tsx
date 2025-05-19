
import React from 'react';

const Logo = () => {
  return (
    <a href="#" className="font-semibold text-2xl md:text-3xl">
      <span className="text-white">Growth</span>
      <span style={{ 
        background: 'linear-gradient(90deg, #6AE58C 0%, #5B81FD 100%)', 
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }}>Alpha</span>
    </a>
  );
};

export default Logo;
