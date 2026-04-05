export function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size * 3.2}
      height={size}
      viewBox="0 0 192 48"
      fill="none"
      className="select-none"
    >
      {/* Icon: two overlapping arrows representing connection/consulting */}
      <g transform="translate(0, 4)">
        <circle cx="20" cy="20" r="20" fill="url(#c2g)" />
        <path
          d="M11 17l10 5-10 5v-10z"
          fill="#fff"
          opacity="0.95"
        />
        <path
          d="M24 14l7 5-7 5v-10z"
          fill="#fff"
          opacity="0.55"
        />
      </g>
      <defs>
        <linearGradient
          id="c2g"
          x1="0"
          y1="0"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6c5ce7" />
          <stop offset="1" stopColor="#00cec9" />
        </linearGradient>
      </defs>
      {/* cons */}
      <text
        x="48"
        y="33"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="32"
        fill="#6c5ce7"
        letterSpacing="-1"
        className="leading-none"
      >
        cons
      </text>
      {/* 2 */}
      <text
        x="122"
        y="33"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="32"
        fill="#00cec9"
        letterSpacing="-1"
      >
        2
      </text>
      {/* go */}
      <text
        x="144"
        y="33"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="32"
        fill="#0a0a0a"
        letterSpacing="-1"
      >
        go
      </text>
    </svg>
  );
}
