import React from 'react';

const Clock = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.5 28C21.9558 28 28 21.9558 28 14.5C28 7.04416 21.9558 1 14.5 1C7.04416 1 1 7.04416 1 14.5C1 21.9558 7.04416 28 14.5 28Z"
        stroke="inherit"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 6V14.25L21 17"
        stroke="inherit"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Clock;
