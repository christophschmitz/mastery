import React from 'react';

const AddIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="18" cy="18" r="18" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 11C19 10.4477 18.5523 10 18 10C17.4477 10 17 10.4477 17 11V17H11C10.4477 17 10 17.4477 10 18C10 18.5523 10.4477 19 11 19H17V25C17 25.5523 17.4477 26 18 26C18.5523 26 19 25.5523 19 25V19H25C25.5523 19 26 18.5523 26 18C26 17.4477 25.5523 17 25 17H19V11Z"
        fill="#12CDF5"
      />
    </svg>
  );
};

export default AddIcon;
