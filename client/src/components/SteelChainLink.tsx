interface SteelChainLinkProps {
  className?: string;
}

export default function SteelChainLink({
  className = "",
}: SteelChainLinkProps) {
  return (
    <svg
      viewBox="0 0 80 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* center line */}
      <line
        x1="10"
        y1="10"
        x2="70"
        y2="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* left arrowhead */}
      <polyline
        points="20,4 10,10 20,16"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* right arrowhead */}
      <polyline
        points="60,4 70,10 60,16"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
