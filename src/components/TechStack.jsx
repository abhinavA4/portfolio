import React from "react";

const TechStack = () => {
  return (
    <div>
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="profileCard_container animate-spin relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50" style={{animationDuration: '20s'}}>
          <button className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500" style={{animation: 'spin 20s linear infinite reverse'}}>
            <span className="block transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img src="nextjs.svg" alt="Next.js"/>
            </span>
          </button>

          <button className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500" style={{animation: 'spin 20s linear infinite reverse'}}>
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <svg
                viewBox="0 0 48 48"
                y="0px"
                x="0px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                  fill="#00acc1"
                ></path>
              </svg>
            </span>
          </button>

          <button className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500" style={{animation: 'spin 20s linear infinite reverse'}}>
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img src="figma.svg" alt="Figma"/>
            </span>
          </button>

          <button className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500" style={{animation: 'spin 20s linear infinite reverse'}}>
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img src="vercel.svg" alt="Vercel"/>
            </span>
          </button>

          <button className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500" style={{animation: 'spin 20s linear infinite reverse'}}>
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img src="vercel.svg" alt="Vercel"/>
            </span>
          </button>

          <button className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500" style={{animation: 'spin 20s linear infinite reverse'}}>
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img src="nextjs.svg" alt="Next.js"/>
            </span>
          </button>

          <button className="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500" style={{animation: 'spin 20s linear infinite reverse'}}>
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img src="figma.svg" alt="Figma"/>
            </span>
          </button>

          <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0" style={{animation: 'spin 20s linear infinite reverse'}}>
            <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
              <span className="w-30 h-30 inline-block">
                <img src="react.svg" alt="React"/>
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechStack;