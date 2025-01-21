import React, { useEffect, useRef } from 'react';

export const MouseTracker = () => {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (lightRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        lightRef.current.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={lightRef}
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{ background: 'radial-gradient(600px at 50% 50%, rgba(29, 78, 216, 0.15), transparent 80%)' }}
    />
  );
};