import React from 'react';

const ChevronLeft = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="9"
      height="16"
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 15L1 8L8 1"
        stroke="inherit"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChevronLeft;
