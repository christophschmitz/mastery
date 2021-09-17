import React from 'react';

const Badge = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="20"
      height="30"
      viewBox="0 0 20 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.90909 18.8182C14.8294 18.8182 18.8182 14.8294 18.8182 9.90909C18.8182 4.98874 14.8294 1 9.90909 1C4.98874 1 1 4.98874 1 9.90909C1 14.8294 4.98874 18.8182 9.90909 18.8182Z"
        stroke="inherit"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.08541 17.4054L3.54541 29L9.90905 25.1818L16.2727 29L14.7327 17.3927"
        stroke="inherit"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Badge;
