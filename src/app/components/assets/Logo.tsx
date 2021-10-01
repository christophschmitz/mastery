import React from 'react';

const Logo = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="58"
      height="60"
      viewBox="0 0 58 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0221 1.09722C21.2796 -0.979176 25.6036 -0.0216977 27.68 3.23581L56.8651 49.0222C58.9415 52.2797 57.984 56.6036 54.7265 58.68C51.469 60.7564 47.145 59.799 45.0686 56.5415L15.8835 10.7551C13.8072 7.49761 14.7646 3.17362 18.0221 1.09722ZM0 52.8279C0 48.9649 3.13158 45.8333 6.99459 45.8333C10.8576 45.8333 13.9892 48.9649 13.9892 52.8279C13.9892 56.6909 10.8576 59.8225 6.99459 59.8225C3.13158 59.8225 0 56.6909 0 52.8279ZM17.4213 23.7532C15.3449 20.4957 11.0209 19.5382 7.76342 21.6146C4.50592 23.691 3.54843 28.015 5.62483 31.2725L21.8737 56.7642C23.9501 60.0217 28.2741 60.9792 31.5316 58.9028C34.7891 56.8264 35.7466 52.5024 33.6702 49.2449L17.4213 23.7532Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="48"
          y1="-1.90219e-06"
          x2="10"
          y2="104"
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
