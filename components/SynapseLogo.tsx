
import React from 'react';

export const SynapseLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="white" />
    <path d="M70 35.5C70 28.5 64.5 23 57.5 23H42.5C35.5 23 30 28.5 30 35.5V38.5C30 45.5 35.5 51 42.5 51H57.5C64.5 51 70 56.5 70 63.5V66.5C70 73.5 64.5 79 57.5 79H42.5C35.5 79 30 73.5 30 66.5" stroke="black" strokeWidth="8" strokeLinecap="round" />
    {/* Vocal/Soundwave styling elements */}
    <rect x="38" y="47" width="4" height="8" rx="2" fill="black" />
    <rect x="48" y="44" width="4" height="14" rx="2" fill="black" />
    <rect x="58" y="47" width="4" height="8" rx="2" fill="black" />
  </svg>
);

export default SynapseLogo;
