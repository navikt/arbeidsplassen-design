import React from "react";

/**
 * Props for FigureWithEnvelope.
 * @typedef {Object} FigureWithEnvelopeProps
 * @property {string} [className]
 * @property {boolean} [ariaHidden]
 * @property {string} [title]
 */

/** @param {FigureWithEnvelopeProps} props */
export default function FigureWithEnvelope({
  className,
  ariaHidden = true,
  title = "Figur med konvolutt",
}) {
  return (
    <svg
      width="180"
      height="135"
      viewBox="0 0 180 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={ariaHidden}
      aria-label={title}
      className={className}
      role="img"
    >
      <path
        d="M149.438 122.962C147.226 108.629 92.3885 108.316 78.7853 108.316C65.1821 108.316 0.728724 107.039 3.58212 119.162C6.43551 131.285 56.255 139.284 78.7853 131.776C101.316 124.268 151.649 137.296 149.438 122.962Z"
        className="arb-illustration-shadow"
      />
      <path
        d="M29.4961 50.8928C9.88096 61.8016 -7.68526 78.8004 6.43443 94.9798M6.43443 94.9798C7.46423 96.1598 9.93674 98.3767 11.3151 99.5453M6.43443 94.9798L12.8753 95.0225M6.43443 94.9798L6.63934 102.683"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M124.438 55.146C155.784 58.8835 153.002 40.0573 161.056 33.2468M161.056 33.2468C161.074 31.6807 162.956 32.4471 164.474 29.1767M161.056 33.2468C160.598 30.282 160.674 30.7761 161.433 29.1409M161.056 33.2468C164.221 31.3742 165.58 33.0534 167.857 28.1478"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M95.3379 73.7292C93.4006 93.5002 93.4321 103.598 95.3379 119.858"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M65.6816 72.0818C63.7443 91.8528 63.7759 101.95 65.6816 118.21"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M144.439 62.2853C153.285 77.1998 153.714 101.737 79.3744 100.089C5.03468 98.4417 12.1738 72.5254 16.6339 59.1244C21.094 45.7234 26.4516 21.1864 79.3744 21.1865C132.297 21.1867 135.592 47.3708 144.439 62.2853Z"
        fill="url(#paint0_linear_4436_281)"
      />
      <g clipPath="url(#clip0_4436_281)">
        <ellipse
          cx="8.61298"
          cy="13.2066"
          rx="8.61298"
          ry="13.2066"
          transform="matrix(-1 0 0 1 105.355 40.1338)"
          fill="white"
        />
        <ellipse
          cx="4.55981"
          cy="8.12712"
          rx="4.55981"
          ry="8.12712"
          transform="matrix(-1 0 0 1 103.462 42.5851)"
          className="arb-illustration-face-fill"
        />
        <ellipse
          cx="8.61298"
          cy="13.2066"
          rx="8.61298"
          ry="13.2066"
          transform="matrix(-1 0 0 1 75.9697 40.1338)"
          fill="white"
        />
        <ellipse
          cx="4.55981"
          cy="8.12712"
          rx="4.55981"
          ry="8.12712"
          transform="matrix(-1 0 0 1 74.2129 42.2311)"
          className="arb-illustration-face-fill"
        />
      </g>
      <path
        d="M86.639 71.7734C86.5157 76.6976 79.133 75.3899 78.4967 71.3099C82.1077 68.8519 82.7185 69.1085 86.639 71.7734Z"
        className="arb-illustration-face-fill"
      />
      <path
        d="M70.0273 119.983C67.821 119.126 65.9825 119.11 63.6378 119.329C62.3859 119.446 61.0908 119.096 59.8883 119.209"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M99.8303 119.608C97.9155 120.254 95.8742 119.856 93.9156 120.066C92.6399 120.203 91.1824 119.416 89.9462 119.833"
        className="arb-illustration-arms-and-legs-stroke"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M153.378 4.34634L165.437 10.3303C165.901 10.5604 166.438 10.5091 166.85 10.1956L177.752 1.89349C177.408 1.26089 176.768 0.850795 176.062 0.865329C169.218 0.847115 164.955 1.66466 154.897 2.8741C154.142 2.99941 153.568 3.59546 153.378 4.34634Z"
        className="arb-illustration-arms-and-legs-fill"
      />
      <path
        d="M178.046 2.9437L167.589 11.3492C166.902 11.8717 166.007 11.9571 165.234 11.5738L153.371 5.47486C154.056 10.1478 154.33 13.3697 154.537 17.4015C154.579 18.6266 155.569 19.5824 156.69 19.4578C165.804 18.635 171.486 18.1902 177.483 17.4599C178.485 17.3889 179.26 16.4866 179.233 15.3951C179.186 10.9155 178.803 7.65203 178.046 2.9437Z"
        className="arb-illustration-arms-and-legs-fill"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M138.628 10.7216C136.956 11.2286 135.415 11.6959 133.311 11.6459C133.034 11.6393 132.812 11.3948 132.815 11.0998C132.818 10.8048 133.044 10.571 133.321 10.5775C135.262 10.6236 136.636 10.2082 138.285 9.70947C138.73 9.57498 139.194 9.43444 139.696 9.29526C142.049 8.64197 145.057 8.07723 150.271 8.46601C150.547 8.48661 150.758 8.74196 150.742 9.03634C150.726 9.33072 150.489 9.55266 150.213 9.53205C145.113 9.15172 142.213 9.70399 139.96 10.3296C139.499 10.4575 139.059 10.5909 138.628 10.7216Z"
        className="arb-illustration-arms-and-legs-fill"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M136.526 14.6287C133.578 15.5944 130.551 16.5002 127.872 15.9086C127.601 15.8486 127.423 15.5657 127.476 15.2768C127.529 14.9878 127.792 14.8022 128.064 14.8622C130.448 15.3888 133.225 14.5884 136.221 13.6068C136.466 13.5264 136.713 13.4447 136.961 13.3627C139.68 12.4641 142.536 11.5199 145.206 11.5933C145.483 11.601 145.704 11.8463 145.701 12.1413C145.697 12.4363 145.47 12.6693 145.193 12.6616C142.697 12.593 139.999 13.4833 137.239 14.3939C137.002 14.4723 136.764 14.5507 136.526 14.6287Z"
        className="arb-illustration-arms-and-legs-fill"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M136.438 18.0433C135.529 18.3704 134.672 18.597 133.859 18.4931C133.584 18.4579 133.385 18.1919 133.415 17.8989C133.444 17.6059 133.691 17.3969 133.966 17.432C134.542 17.5056 135.217 17.3507 136.107 17.0304C136.515 16.8834 136.953 16.708 137.436 16.5145C137.473 16.4996 137.511 16.4845 137.549 16.4693C138.074 16.2591 138.646 16.0313 139.27 15.8066C141.775 14.9033 145.088 14.0528 149.701 14.4512C149.978 14.475 150.186 14.7328 150.167 15.0269C150.148 15.3211 149.909 15.5402 149.633 15.5163C145.19 15.1327 142.015 15.949 139.601 16.8193C138.995 17.038 138.436 17.2603 137.911 17.4703C137.872 17.4859 137.833 17.5016 137.794 17.5171C137.316 17.7087 136.863 17.8904 136.438 18.0433Z"
        className="arb-illustration-arms-and-legs-fill"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4436_281"
          x1="81.2777"
          y1="21.1865"
          x2="81.2777"
          y2="100.168"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#EE7D7A" />
          <stop offset="1" stopColor="#E36E6B" />
        </linearGradient>
        <clipPath id="clip0_4436_281">
          <rect
            width="46.6114"
            height="26.4131"
            fill="white"
            transform="matrix(-1 0 0 1 105.355 40.1338)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
