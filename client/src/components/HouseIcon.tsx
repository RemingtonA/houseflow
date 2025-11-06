interface HouseIconProps {
  className?: string;
}

export default function HouseIcon({ className = "" }: HouseIconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#shadow)">
        <path
          d="M40 15L60 30V60C60 62.2091 58.2091 64 56 64H24C21.7909 64 20 62.2091 20 60V30L40 15Z"
          fill="white"
          stroke="#424245"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M20 30L40 15L60 30"
          fill="#F5F5F7"
          stroke="#424245"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <rect
          x="32"
          y="45"
          width="16"
          height="19"
          fill="#424245"
          stroke="#424245"
          strokeWidth="2"
        />
        <circle cx="42" cy="54" r="1.5" fill="white" />
      </g>
      <defs>
        <filter id="shadow" x="14" y="11" width="52" height="61" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="2"/>
          <feGaussianBlur stdDeviation="3"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
      </defs>
    </svg>
  );
}
