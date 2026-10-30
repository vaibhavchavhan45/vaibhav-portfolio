function Svg({ size = 24, color, className, children }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      className={className}
      style={color ? { color } : undefined}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function GroqLogo(props) {
  return (
    <Svg {...props}>
      <path
        d="M16.95 7.05A7 7 0 1 0 19 12H12"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function VoyageLogo(props) {
  return (
    <Svg {...props}>
      <path
        d="M4 5l8 15 8-15"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function FaissLogo(props) {
  return (
    <Svg {...props}>
      <path
        d="M12 12c-2-3-3.5-4.5-5.5-4.5a4.5 4.5 0 1 0 0 9c2 0 3.5-1.5 5.5-4.5s3.5-4.5 5.5-4.5a4.5 4.5 0 1 1 0 9c-2 0-3.5-1.5-5.5-4.5z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ChromaLogo(props) {
  return (
    <Svg {...props}>
      <defs>
        <clipPath id="chroma-left">
          <circle cx="9" cy="12" r="6.5" />
        </clipPath>
      </defs>
      <circle cx="9" cy="12" r="6.5" fill="#327EFF" />
      <circle cx="15" cy="12" r="6.5" fill="#FF6446" />
      <circle cx="15" cy="12" r="6.5" fill="#FFDE2D" clipPath="url(#chroma-left)" />
    </Svg>
  );
}

export function PineconeLogo(props) {
  return (
    <Svg {...props}>
      <path
        d="M12 2L18 8L12 22L6 8Z M7.5 11L12 14L16.5 11 M9 15.5L12 17.5L15 15.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}