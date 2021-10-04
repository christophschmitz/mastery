import React from 'react';

const Logo = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="47"
      height="48"
      viewBox="0 0 47 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4177 0.877777C17.0237 -0.783342 20.4829 -0.0173568 22.144 2.58865L45.4921 39.2177C47.1532 41.8237 46.3872 45.2829 43.7812 46.944C41.1752 48.6052 37.716 47.8392 36.0549 45.2332L12.7068 8.6041C11.0457 5.99809 11.8117 2.5389 14.4177 0.877777ZM0 42.2623C0 39.1719 2.50527 36.6667 5.59567 36.6667C8.68607 36.6667 11.1913 39.1719 11.1913 42.2623C11.1913 45.3527 8.68607 47.858 5.59567 47.858C2.50527 47.858 0 45.3527 0 42.2623ZM13.9371 19.0026C12.2759 16.3966 8.81675 15.6306 6.21074 17.2917C3.60473 18.9528 2.83875 22.412 4.49987 25.018L17.499 45.4114C19.1601 48.0174 22.6193 48.7833 25.2253 47.1222C27.8313 45.4611 28.5973 42.0019 26.9361 39.3959L13.9371 19.0026Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="38.4"
          y1="-1.52175e-06"
          x2="8"
          y2="83.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#12CDF5" />
          <stop offset="1" stopColor="#108EAA" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
