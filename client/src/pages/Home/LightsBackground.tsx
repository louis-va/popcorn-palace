import { ReactNode } from 'react';

interface LightProps {
  className?: string;
}

interface LightsLayerProps {
  className?: string;
  children: ReactNode;
}

const Light = ({ className }: LightProps) => {
  const position = {
    x: Math.random()*100 - 15,
    y: Math.random()*100 - 30
  }

  const fadeDuration = Math.floor(Math.random()*10 + 5)
  const floatDuration = Math.floor(Math.random()*10 + 5)

  return (
    <div 
      className="absolute" 
      style={{
        left: `${position.x}%`, 
        top: `${position.y}%`,
        animation: `fade ${fadeDuration}s infinite, float ${floatDuration}s infinite`
      }}
    >
      <svg className={className} width="293" height="293" viewBox="0 0 293 293" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.75">
        <g filter="url(#filter0_f_749_730)">
        <circle cx="146.5" cy="146.5" r="96.5" fill="#D96A2B" fillOpacity="0.1"/>
        </g>
        <g filter="url(#filter1_f_749_730)">
        <circle cx="146" cy="146" r="66" fill="#D96A2B" fillOpacity="0.1"/>
        </g>
        <g filter="url(#filter2_f_749_730)">
        <circle cx="146.28" cy="147.28" r="20.1245" fill="#FD782D"/>
        </g>
        <g filter="url(#filter3_f_749_730)">
        <circle cx="146.279" cy="147.279" r="10.7331" fill="#FFD2B8"/>
        </g>
        </g>
        <defs>
        <filter id="filter0_f_749_730" x="0" y="0" width="293" height="293" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_749_730"/>
        </filter>
        <filter id="filter1_f_749_730" x="30" y="30" width="232" height="232" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_749_730"/>
        </filter>
        <filter id="filter2_f_749_730" x="116.155" y="117.155" width="60.249" height="60.2491" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_749_730"/>
        </filter>
        <filter id="filter3_f_749_730" x="131.546" y="132.546" width="29.4663" height="29.4662" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_749_730"/>
        </filter>
        </defs>
      </svg>
    </div>
  )
}

const LightsLayer = ({ className, children }: LightsLayerProps) => {  
  return (
    <div 
      className={`absolute top-0 left-0 w-full h-[200%] ${className}`}
      style={{
        transform: `translateY(0px)`,
        transition: 'transform',
        transitionDuration: '50ms',
        transitionTimingFunction: 'ease-in'
      }}
    >
      <div className="relative w-full h-full overflow-x-hidden">
        {children}
      </div>
    </div>
  )
}

const LightsBackground = () => {
  return (
    <div className="absolute top-0 left-0 -z-50 w-screen h-screen">
      <div className="relative w-full h-full">
        <LightsLayer className='-z-10'>
          <Light className="w-70 h-70" />
          <Light className="w-70 h-70" />
          <Light className="w-70 h-70" />
          <Light className="w-70 h-70 hidden md:block" />
          <Light className="w-70 h-70 hidden lg:block" />
        </LightsLayer>

        <LightsLayer className='-z-20'>
          <Light className="w-60 h-60" />
          <Light className="w-60 h-60" />
          <Light className="w-60 h-60" />
          <Light className="w-60 h-60 hidden md:block" />
          <Light className="w-60 h-60 hidden lg:block" />
        </LightsLayer>

        <LightsLayer className='-z-30'>
          <Light className="w-50 h-50" />
          <Light className="w-50 h-50" />
          <Light className="w-50 h-50" />
          <Light className="w-50 h-50 hidden md:block" />
          <Light className="w-50 h-50 hidden lg:block" />
        </LightsLayer>

        <LightsLayer className='-z-30'>
          <Light className="w-40 h-40" />
          <Light className="w-40 h-40" />
          <Light className="w-40 h-40" />
          <Light className="w-40 h-40 hidden md:block" />
          <Light className="w-40 h-40 hidden lg:block" />
        </LightsLayer>
      </div>
    </div>
  )
}

export default LightsBackground