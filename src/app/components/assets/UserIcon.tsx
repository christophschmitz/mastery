import React from 'react';

const UserIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="27"
      height="30"
      viewBox="0 0 27 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M25.2938 28.3305V25.2938C25.2938 23.683 24.6539 22.1382 23.5149 20.9992C22.3759 19.8602 20.8311 19.2203 19.2203 19.2203H7.07345C5.46267 19.2203 3.91786 19.8602 2.77887 20.9992C1.63988 22.1382 1 23.683 1 25.2938V28.3305"
        stroke="inherit"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.1469 13.1469C16.5011 13.1469 19.2203 10.4277 19.2203 7.07345C19.2203 3.71918 16.5011 1 13.1469 1C9.7926 1 7.07343 3.71918 7.07343 7.07345C7.07343 10.4277 9.7926 13.1469 13.1469 13.1469Z"
        stroke="inherit"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default UserIcon;
