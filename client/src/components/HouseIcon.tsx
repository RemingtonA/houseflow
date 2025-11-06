import { Check, X } from "lucide-react";
import type { HouseStatus } from "@shared/schema";

interface HouseIconProps {
  className?: string;
  status?: HouseStatus;
  isUserProperty?: boolean;
}

export default function HouseIcon({ 
  className = "", 
  status = "pending",
  isUserProperty = false 
}: HouseIconProps) {
  const getStrokeColor = () => {
    if (isUserProperty) return "#007AFF";
    if (status === "complete") return "#22C55E";
    if (status === "incomplete") return "#EF4444";
    return "#424245";
  };

  const strokeColor = getStrokeColor();
  const strokeWidth = isUserProperty || status !== "pending" ? "3" : "2";

  return (
    <div className="relative inline-block">
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
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <path
            d="M20 30L40 15L60 30"
            fill="#F5F5F7"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
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
      
      {status === "complete" && (
        <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1 shadow-md">
          <Check className="w-4 h-4 text-white" strokeWidth={3} />
        </div>
      )}
      
      {status === "incomplete" && (
        <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1 shadow-md">
          <X className="w-4 h-4 text-white" strokeWidth={3} />
        </div>
      )}
    </div>
  );
}
