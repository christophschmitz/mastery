import React from 'react';

const HomeIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="27"
      height="29"
      viewBox="0 0 27 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 10.45L13.15 1L25.3 10.45V25.3C25.3 26.0161 25.0155 26.7028 24.5092 27.2092C24.0028 27.7155 23.3161 28 22.6 28H3.7C2.98392 28 2.29716 27.7155 1.79081 27.2092C1.28446 26.7028 1 26.0161 1 25.3V10.45Z"
        stroke="inherit"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.10001 28V14.5H17.2V28"
        stroke="inherit"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HomeIcon;
