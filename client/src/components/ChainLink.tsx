interface ChainLinkProps {
  className?: string;
}

export default function ChainLink({ className = "" }: ChainLinkProps) {
  return (
    <svg
      viewBox="0 0 60 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 20 Q 15 10, 30 20 T 55 20"
        stroke="#D1D1D6"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="15" cy="15" r="4" fill="#D1D1D6" />
      <circle cx="30" cy="20" r="4" fill="#D1D1D6" />
      <circle cx="45" cy="15" r="4" fill="#D1D1D6" />
    </svg>
  );
}
