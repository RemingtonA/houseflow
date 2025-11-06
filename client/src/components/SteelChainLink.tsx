interface SteelChainLinkProps {
  className?: string;
}

export default function SteelChainLink({ className = "" }: SteelChainLinkProps) {
  return (
    <svg
      viewBox="0 0 80 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="steelGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#E8E8E8", stopOpacity: 1 }} />
          <stop offset="30%" style={{ stopColor: "#B8B8B8", stopOpacity: 1 }} />
          <stop offset="70%" style={{ stopColor: "#A0A0A0", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#D0D0D0", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="steelGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#D0D0D0", stopOpacity: 1 }} />
          <stop offset="30%" style={{ stopColor: "#A0A0A0", stopOpacity: 1 }} />
          <stop offset="70%" style={{ stopColor: "#B8B8B8", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#E8E8E8", stopOpacity: 1 }} />
        </linearGradient>
        <filter id="chainShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.5"/>
          <feOffset dx="0" dy="1" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <g filter="url(#chainShadow)">
        {/* First link */}
        <ellipse
          cx="20"
          cy="25"
          rx="12"
          ry="16"
          fill="url(#steelGradient1)"
          stroke="#888"
          strokeWidth="1.5"
        />
        <ellipse
          cx="20"
          cy="25"
          rx="7"
          ry="11"
          fill="none"
          stroke="#666"
          strokeWidth="1"
        />
        
        {/* Second link */}
        <ellipse
          cx="40"
          cy="25"
          rx="12"
          ry="16"
          fill="url(#steelGradient2)"
          stroke="#888"
          strokeWidth="1.5"
          transform="rotate(90 40 25)"
        />
        <ellipse
          cx="40"
          cy="25"
          rx="7"
          ry="11"
          fill="none"
          stroke="#666"
          strokeWidth="1"
          transform="rotate(90 40 25)"
        />
        
        {/* Third link */}
        <ellipse
          cx="60"
          cy="25"
          rx="12"
          ry="16"
          fill="url(#steelGradient1)"
          stroke="#888"
          strokeWidth="1.5"
        />
        <ellipse
          cx="60"
          cy="25"
          rx="7"
          ry="11"
          fill="none"
          stroke="#666"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}
