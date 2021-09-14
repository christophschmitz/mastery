import React from 'react';

const Logo = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="71"
      height="71"
      viewBox="0 0 71 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d)">
        <rect
          x="2"
          y="2"
          width="59"
          height="59"
          rx="8"
          fill="url(#paint0_linear)"
        />
        <g filter="url(#filter1_d)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.7289 13.7279C26.7043 12.4687 29.3265 13.0493 30.5856 15.0247L48.2839 42.7903C49.5431 44.7657 48.9624 47.3878 46.987 48.647C45.0116 49.9061 42.3895 49.3255 41.1303 47.3501L23.4321 19.5846C22.1729 17.6092 22.7535 14.987 24.7289 13.7279ZM13.8 45.0982C13.8 42.7556 15.699 40.8566 18.0416 40.8566C20.3842 40.8566 22.2832 42.7556 22.2832 45.0982C22.2832 47.4408 20.3842 49.3398 18.0416 49.3398C15.699 49.3398 13.8 47.4408 13.8 45.0982ZM24.3646 27.4669C23.1054 25.4914 20.4833 24.9108 18.5079 26.17C16.5325 27.4291 15.9518 30.0513 17.211 32.0267L27.0646 47.4852C28.3237 49.4606 30.9459 50.0412 32.9213 48.7821C34.8967 47.5229 35.4773 44.9008 34.2181 42.9254L24.3646 27.4669Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="71"
          height="71"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0611111 0 0 0 0 0.557667 0 0 0 0 0.666667 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d"
          x="8.79999"
          y="10.0625"
          width="45.1493"
          height="46.3849"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0611111 0 0 0 0 0.557667 0 0 0 0 0.666667 0 0 0 0.75 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="-8.50445"
          y1="-51.7322"
          x2="69.376"
          y2="-47.1684"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#108EAA" />
          <stop offset="1" stop-color="#12CDF5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
