import React from "react";

const TechStack = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes counter-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        .spin-container {
          animation: spin 20s linear infinite;
        }
        
        .counter-spin {
          animation: counter-spin 20s linear infinite;
        }
        
        .dotted-circle {
          border: 2px dotted #9ca3af;
          border-spacing: 4px;
        }
        
        .icon-shadow {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .icon-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .icon-hover:hover {
          transform: scale(1.2);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
          z-index: 10;
        }
        
        .center-icon:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
        }
      `}</style>
      
      <div className="relative">
        {/* Main spinning container with dotted border */}
        <div className="spin-container relative w-72 h-72 dotted-circle rounded-full flex items-center justify-center">
          
          {/* Icon 1: 0° (top) - Next.js */}
          <button className="profile_item absolute rounded-full bg-white cursor-pointer border border-gray-300 p-2 icon-shadow icon-hover" 
                  style={{
                    top: '-30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '60px'
                  }}>
            <div className="counter-spin w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path fill="#000" d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C23.197 4.174 20.956 1.5 17.892.398 16.875.09 15.887-.007 14.831-.007c-.4.013-.33.013-.66.013-.11 0-.268.008-.352.02z"/>
              </svg>
            </div>
          </button>

          {/* Icon 2: 45° (top-right) - React */}
          <button className="profile_item absolute rounded-full bg-white cursor-pointer border border-gray-300 p-2 icon-shadow icon-hover" 
                  style={{
                    top: 'calc(14.6% - 30px)',
                    right: 'calc(14.6% - 30px)',
                    width: '60px',
                    height: '60px'
                  }}>
            <div className="counter-spin w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8">
                <circle cx="12" cy="12" r="2" fill="#61dafb"/>
                <path fill="none" stroke="#61dafb" strokeWidth="1.5" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2"/>
                <ellipse cx="12" cy="12" rx="9" ry="3" fill="none" stroke="#61dafb" strokeWidth="1"/>
                <ellipse cx="12" cy="12" rx="9" ry="3" fill="none" stroke="#61dafb" strokeWidth="1" transform="rotate(60 12 12)"/>
                <ellipse cx="12" cy="12" rx="9" ry="3" fill="none" stroke="#61dafb" strokeWidth="1" transform="rotate(120 12 12)"/>
              </svg>
            </div>
          </button>

          {/* Icon 3: 90° (right) - Tailwind */}
          <button className="profile_item absolute rounded-full bg-white cursor-pointer border border-gray-300 p-2 icon-shadow icon-hover" 
                  style={{
                    top: '50%',
                    right: '-30px',
                    transform: 'translateY(-50%)',
                    width: '60px',
                    height: '60px'
                  }}>
            <div className="counter-spin w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-8 h-8">
                <path d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z" fill="#00acc1"/>
              </svg>
            </div>
          </button>

          {/* Icon 4: 135° (bottom-right) - TypeScript */}
          <button className="profile_item absolute rounded-full bg-white cursor-pointer border border-gray-300 p-2 icon-shadow icon-hover" 
                  style={{
                    bottom: 'calc(14.6% - 30px)',
                    right: 'calc(14.6% - 30px)',
                    width: '60px',
                    height: '60px'
                  }}>
            <div className="counter-spin w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-8 h-8">
                <rect width="32" height="32" x="8" y="8" fill="#3178c6" rx="2"/>
                <path fill="#fff" d="M23 20h-8v3h2.5v9h3v-9h2.5v-3zm8.5 0c-.83 0-1.5.67-1.5 1.5v.5h-2v-.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 .78-.32 1.47-.83 1.97L32 25.59V27h-5v-2.41l2.17-2.42c.51-.5.83-1.19.83-1.97 0-.83-.67-1.5-1.5-1.5z"/>
              </svg>
            </div>
          </button>

          {/* Icon 5: 180° (bottom) - Vercel */}
          <button className="profile_item absolute rounded-full bg-white cursor-pointer border border-gray-300 p-2 icon-shadow icon-hover" 
                  style={{
                    bottom: '-30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '60px'
                  }}>
            <div className="counter-spin w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path fill="#000" d="M12 2L22 20H2L12 2z"/>
              </svg>
            </div>
          </button>

          {/* Icon 6: 225° (bottom-left) - Node.js */}
          <button className="profile_item absolute rounded-full bg-white cursor-pointer border border-gray-300 p-2 icon-shadow icon-hover" 
                  style={{
                    bottom: 'calc(14.6% - 30px)',
                    left: 'calc(14.6% - 30px)',
                    width: '60px',
                    height: '60px'
                  }}>
            <div className="counter-spin w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-8 h-8">
                <path fill="#388e3c" d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076"/>
                <path fill="#388e3c" d="M30.097 19.122l-4.907 2.715c-.184.102-.297.29-.297.492v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717c.184-.102.297-.29.297-.492v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076"/>
              </svg>
            </div>
          </button>

          {/* Icon 7: 270° (left) - Figma */}
          <button className="profile_item absolute rounded-full bg-white cursor-pointer border border-gray-300 p-2 icon-shadow icon-hover" 
                  style={{
                    top: '50%',
                    left: '-30px',
                    transform: 'translateY(-50%)',
                    width: '60px',
                    height: '60px'
                  }}>
            <div className="counter-spin w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path fill="#f24e1e" d="M12 12h4a4 4 0 0 0 0-8h-4v8z"/>
                <path fill="#a259ff" d="M8 20a4 4 0 0 0 4-4v-4H8a4 4 0 0 0 0 8z"/>
                <path fill="#ff7262" d="M8 12a4 4 0 0 1 0-8h4v8H8z"/>
                <path fill="#1abcfe" d="M8 4a4 4 0 0 0 0 8h4V4H8z"/>
                <circle cx="16" cy="16" r="4" fill="#0acf83"/>
              </svg>
            </div>
          </button>

          {/* Icon 8: 315° (top-left) - JavaScript */}
          <button className="profile_item absolute rounded-full bg-white cursor-pointer border border-gray-300 p-2 icon-shadow icon-hover" 
                  style={{
                    top: 'calc(14.6% - 30px)',
                    left: 'calc(14.6% - 30px)',
                    width: '60px',
                    height: '60px'
                  }}>
            <div className="counter-spin w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-8 h-8">
                <rect width="32" height="32" x="8" y="8" fill="#fdd835" rx="2"/>
                <text x="24" y="32" fill="#000" fontSize="20" fontFamily="Arial, sans-serif" fontWeight="bold" textAnchor="middle">JS</text>
              </svg>
            </div>
          </button>

          {/* Center React Logo */}
          <div className="counter-spin absolute profile_item w-[150px] h-[150px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
            <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
              <svg viewBox="0 0 24 24" className="w-20 h-20">
                <circle cx="12" cy="12" r="2.5" fill="#61dafb"/>
                <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61dafb" strokeWidth="1"/>
                <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61dafb" strokeWidth="1" transform="rotate(60 12 12)"/>
                <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61dafb" strokeWidth="1" transform="rotate(120 12 12)"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;