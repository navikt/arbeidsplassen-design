import React from "react";

export default function WavingFigure({
  className,
  ariaHidden = true,
  title = "Vinkende figur",
}) {
  return (
    <svg
      width="183"
      height="133"
      viewBox="0 0 183 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={ariaHidden}
      aria-label={title}
      className={className}
      role="img"
    >
      <title>{title}</title>
      <path
        d="M25.0162 119.427C26.9547 103.69 75.0257 103.346 86.9504 103.346C98.875 103.346 155.375 101.944 152.874 115.255C150.373 128.565 106.7 137.347 86.9503 129.104C67.2002 120.861 23.0777 135.164 25.0162 119.427Z"
        className="arb-illustration-shadow"
      />
      <path
        d="M128.853 64C142.353 44 164.853 46.5 166.522 20.8483M166.954 14C167.425 16.8593 166.294 18.3311 166.522 20.8483M166.522 20.8483L163.454 14M166.522 20.8483L170.854 15.0004"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M48.8909 36.7239C29.3046 49.1411 17.9091 57.072 19.7297 82.2972M20.6178 90.0194C20.1982 87.2748 19.9036 84.7071 19.7297 82.2972M19.7297 82.2972L27.035 87.2647M19.7297 82.2972L14.3262 90.695"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M71.8928 61.8389C69.7036 84.18 69.7393 95.5903 71.8928 113.964"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M105.636 61.8389C107.825 84.18 107.79 95.5903 105.636 113.964"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M148.452 45.0546C148.452 69.746 122.197 89.7623 89.8107 89.7623C57.4242 89.7623 27.4464 73.7949 31.1697 45.0546C34.893 16.3144 56.3015 -2.84658 89.8107 0.346979C123.32 3.54054 148.452 20.3633 148.452 45.0546Z"
        fill="url(#paint0_linear_1741_26769)"
      />
      <g clipPath="url(#clip0_1741_26769)">
        <ellipse
          cx="74.799"
          cy="35.4051"
          rx="8.25588"
          ry="12.659"
          fill="white"
        />
        <ellipse
          cx="74.799"
          cy="35.4051"
          rx="4.37076"
          ry="5.84262"
          className="arb-illustration-face-fill"
        />
        <ellipse
          cx="102.966"
          cy="35.4051"
          rx="8.25588"
          ry="12.659"
          fill="white"
        />
        <ellipse
          cx="102.966"
          cy="35.4051"
          rx="4.37076"
          ry="5.84262"
          className="arb-illustration-face-fill"
        />
      </g>
      <path
        d="M80.7184 55.3389C81.5688 58.179 95.1482 58.8789 95.2175 56.6299"
        className="arb-illustration-face-stroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M101.553 113.51C103.175 113.929 104.522 113.644 106.296 113.929C107.508 114.124 109.501 113.929 110.655 114.168"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M66.1034 113.727C66.4073 113.392 68.7408 113.128 69.3005 113.277C70.2001 113.516 71.3766 113.566 72.3191 113.415C73.1018 113.29 73.8602 113.457 74.5933 113.536C75.351 113.618 76.2788 113.583 76.9141 114.044"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1741_26769"
          x1="89.6537"
          y1="0"
          x2="89.6537"
          y2="89.7623"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#90E8C3" />
          <stop offset="1" stopColor="#7CCCAB" />
        </linearGradient>
        <clipPath id="clip0_1741_26769">
          <rect
            width="44.6789"
            height="25.318"
            fill="white"
            transform="translate(66.5432 22.7461)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
