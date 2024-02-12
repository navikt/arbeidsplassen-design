import React from "react";

export default function WorriedFigure({
  className,
  ariaHidden = true,
  title = "Bekymret figur",
}) {
  return (
    <svg
      width="174"
      height="112"
      viewBox="0 0 174 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={ariaHidden}
      aria-label={title}
      className={className}
      role="img"
    >
      <title>{title}</title>
      <path
        d="M47.3562 33.7129C27.1394 36.442 7.33651 50.8398 18.2446 73.8256M18.2446 73.8256C19.0913 75.1369 21.2131 77.6779 22.4056 79.0283M18.2446 73.8256L24.5968 74.797M18.2446 73.8256L17.3382 81.4448"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M137.613 30.9121C161.778 34.4099 169.145 62 163.961 68.659M163.961 68.659C164.207 70.5069 162.254 73.5486 162.5 75.528M163.961 68.659L158.5 72.5M163.961 68.659L167.5 75.528"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M173.898 96.8513C171.535 111.503 112.948 111.823 98.4153 111.823C83.8821 111.823 15.0226 113.129 18.0711 100.736C21.1195 88.3438 74.3448 80.167 98.4153 87.8416C122.486 95.5162 176.26 82.1995 173.898 96.8513Z"
        className="arb-illustration-shadow"
      />
      <path
        d="M79.9729 52C75.9401 71.7158 76.0058 81.7853 79.9729 98"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M107.973 51C106.629 70.2872 106.651 80.1378 107.973 96"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M154.957 41.1083C163.779 56.0263 164.207 80.569 90.0749 78.9211C15.9431 77.2732 23.0622 51.3508 27.5099 37.9467C31.9575 24.5425 37.3001 -0.000136755 90.0749 3.25758e-10C142.85 0.000136755 146.135 26.1904 154.957 41.1083Z"
        fill="url(#paint0_linear_2690_76651)"
      />
      <g clipPath="url(#clip0_2690_76651)">
        <ellipse
          cx="73.2545"
          cy="30.7121"
          rx="8.57648"
          ry="13.1506"
          fill="white"
        />
        <ellipse
          cx="73.2544"
          cy="36.7818"
          rx="4.54049"
          ry="7.0811"
          className="arb-illustration-face-fill"
        />
        <ellipse
          cx="102.515"
          cy="30.7121"
          rx="8.57648"
          ry="13.1506"
          fill="white"
        />
        <ellipse
          cx="102.515"
          cy="36.7818"
          rx="4.54049"
          ry="7.0811"
          className="arb-illustration-face-fill"
        />
      </g>
      <path
        d="M95.6595 50.9996C93.1594 49 82.9951 49.6968 82.7968 50.2112"
        className="arb-illustration-face-stroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M114.316 17.8877C111.867 14.2715 107.907 12.2857 101.127 12.0313"
        className="arb-illustration-face-stroke"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M61.2774 17.8877C63.7264 14.2715 67.6861 12.2857 74.4658 12.0313"
        className="arb-illustration-face-stroke"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M103.004 98.0684C105.201 97.2151 107.032 97.1991 109.367 97.4173C110.613 97.5338 111.903 97.1854 113.1 97.2973"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M73.3243 97.6942C75.2311 98.3381 77.2637 97.9412 79.2139 98.1508C80.4843 98.2873 81.9356 97.503 83.1666 97.9188"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2690_76651"
          x1="91.9729"
          y1="0"
          x2="91.9729"
          y2="79"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#EE7D7A" />
          <stop offset="1" stopColor="#E36E6B" />
        </linearGradient>
        <clipPath id="clip0_2690_76651">
          <rect
            width="46.4139"
            height="26.3012"
            fill="white"
            transform="translate(64.678 17.5615)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
