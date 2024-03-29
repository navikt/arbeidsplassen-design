import React from "react";

/**
 * @deprecated
 */
function StrawberryWithKey({
  className,
  ariaHidden = true,
  title = "Figur med nøkkel",
}) {
  return (
    <svg
      width="209"
      height="140"
      viewBox="0 0 209 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={ariaHidden}
      aria-label={title}
      className={className}
      role="img"
    >
      <title>{title}</title>
      <path
        d="M181.414 126.202C178.902 109.838 116.617 109.481 101.167 109.481C85.7162 109.481 12.51 108.023 15.7508 121.863C18.9917 135.703 75.5769 144.835 101.167 136.264C126.757 127.693 183.926 142.565 181.414 126.202Z"
        className="arb-illustration-shadow"
      />
      <path
        d="M153.616 40.0768C175.938 52.4664 195.927 71.7732 179.858 90.1508M174.304 95.3366C175.873 94.0092 178.686 91.4911 179.858 90.1508M179.858 90.1508L172.529 90.1996M179.858 90.1508L179.625 98.8997"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M38.1816 64.8127C32.5259 45.9523 9.1205 66.7091 12.5538 36.7592M12.2236 30.982C12.3718 34.0043 10.1392 34.1291 12.5538 36.7592M12.5538 36.7592C11.8808 36.3326 10.5666 33.6865 11.0209 30.9821M12.5538 36.7592C14.4873 33.3221 14.3336 33.0256 13.7333 30.9822"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M119.969 70.5583C117.768 93.0143 117.804 104.483 119.969 122.951"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M86.2852 68.6873C84.0847 91.1432 84.1206 102.612 86.2852 121.08"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M175.736 57.5605C185.784 74.5004 186.271 102.37 101.836 100.498C17.4007 98.627 25.5093 69.1912 30.5751 53.9703C35.6409 38.7494 41.7261 10.8802 101.836 10.8804C161.946 10.8805 165.688 40.6206 175.736 57.5605Z"
        fill="url(#paint0_linear_1509_20576)"
      />
      <g clipPath="url(#clip0_1509_20576)">
        <ellipse
          cx="9.78264"
          cy="15"
          rx="9.78264"
          ry="15"
          transform="matrix(-1 0 0 1 118.852 31.2646)"
          fill="white"
        />
        <ellipse
          cx="5.17904"
          cy="9.2308"
          rx="5.17904"
          ry="9.2308"
          transform="matrix(-1 0 0 1 109.887 35.1846)"
          className="arb-illustration-face-fill"
        />
        <ellipse
          cx="9.78264"
          cy="15"
          rx="9.78264"
          ry="15"
          transform="matrix(-1 0 0 1 85.4746 31.2646)"
          fill="white"
        />
        <ellipse
          cx="5.17905"
          cy="9.2308"
          rx="5.17905"
          ry="9.2308"
          transform="matrix(-1 0 0 1 76.666 34.7827)"
          className="arb-illustration-face-fill"
        />
      </g>
      <path
        d="M99.1172 65.7161C97.1236 71.4658 85.4314 69.7165 86.3877 64.9876"
        className="arb-illustration-face-stroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M91.2207 123.094C88.7147 122.12 86.6266 122.102 83.9634 122.351C82.5416 122.484 81.0705 122.086 79.7048 122.214"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M125.072 122.667C122.897 123.401 120.578 122.949 118.354 123.188C116.905 123.343 115.249 122.449 113.845 122.923"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.62088 1.39622L9.41173 0.797819L12.5905 20.935C15.6471 21.3585 18.2381 23.8947 18.7761 27.3031C19.4253 31.4156 16.84 35.2406 13.0017 35.8465C9.16334 36.4524 5.5255 33.6098 4.87633 29.4973C4.33829 26.0888 6.02209 22.8778 8.79962 21.5334L6.81584 8.96624C6.12197 9.78257 5.07071 10.3871 3.83319 10.5824L3.20139 10.6821L2.80957 8.20003L3.44138 8.10029C4.08298 7.99901 4.56461 7.69792 4.84616 7.37332C5.12311 7.05403 5.17358 6.76704 5.1409 6.56004C5.10823 6.35304 4.97181 6.09555 4.60998 5.87709C4.24213 5.655 3.69117 5.51691 3.04957 5.61819L2.41776 5.71792L2.02593 3.23568L2.65776 3.13608C3.89528 2.94073 5.08162 3.192 5.99321 3.7549L5.62088 1.39622ZM12.4139 32.1234C13.8549 31.8959 15.359 30.2694 14.9853 27.9015C14.6115 25.5337 12.6795 24.4496 11.2385 24.677C9.79757 24.9045 8.29341 26.531 8.66719 28.8989C9.04096 31.2667 10.973 32.3508 12.4139 32.1234Z"
        className="arb-illustration-items-fill"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1509_20576"
          x1="103.998"
          y1="10.8804"
          x2="103.998"
          y2="100.588"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#EE7D7A" />
          <stop offset="1" stopColor="#E36E6B" />
        </linearGradient>
        <clipPath id="clip0_1509_20576">
          <rect
            width="52.9413"
            height="30.0001"
            fill="white"
            transform="matrix(-1 0 0 1 118.852 31.2646)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default StrawberryWithKey;
