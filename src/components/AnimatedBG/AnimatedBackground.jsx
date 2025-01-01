import React from 'react';
import Squares from '../ReactBits/Squares/Squares';

const AnimatedBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background container */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <Squares 
          speed={0.3}
          size={70}
          direction="diagonal"
          borderColor="#ffe53f"
          hoverFillColor="#ba952e"
        />
      </div>
      
      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;