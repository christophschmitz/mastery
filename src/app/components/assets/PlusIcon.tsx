import React from 'react';

const PlusIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.6653 28.3305C22.2124 28.3305 28.3305 22.2124 28.3305 14.6653C28.3305 7.11814 22.2124 1 14.6653 1C7.11814 1 1 7.11814 1 14.6653C1 22.2124 7.11814 28.3305 14.6653 28.3305Z"
        stroke="inherit"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6652 9.19916V20.1314"
        stroke="inherit"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.1991 14.6652H20.1313"
        stroke="inherit"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
