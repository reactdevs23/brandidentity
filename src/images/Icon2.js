import React from "react";

const Icon2 = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_276_2308"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="44"
        height="44"
      >
        <path
          d="M0.0625 0.557281H43.0625V43.5573H0.0625V0.557281Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_276_2308)">
        <path
          d="M21.4427 43.3229C9.65104 43.3229 0.0625 33.7292 0.0625 21.9375C0.0625 10.151 9.65104 0.557281 21.4427 0.557281C33.2344 0.557281 42.8281 10.151 42.8281 21.9375C42.8281 33.7292 33.2344 43.3229 21.4427 43.3229ZM21.4427 4.11978C11.6198 4.11978 3.625 12.1146 3.625 21.9375C3.625 31.7656 11.6198 39.7604 21.4427 39.7604C31.2708 39.7604 39.2604 31.7656 39.2604 21.9375C39.2604 12.1146 31.2708 4.11978 21.4427 4.11978Z"
          fill={color}
        />
      </g>
      <path
        d="M19.6614 30.849C19.1875 30.849 18.7344 30.6615 18.401 30.3281L11.276 23.1979C10.5781 22.5 10.5781 21.375 11.276 20.6771C11.9687 19.9844 13.0989 19.9844 13.7917 20.6771L19.5729 26.4583L30.7917 13.6406C31.4427 12.8958 32.5677 12.8229 33.3073 13.4688C34.0469 14.1198 34.125 15.2448 33.4739 15.9844L21 30.2396C20.6771 30.6094 20.2135 30.8333 19.7187 30.849C19.6979 30.849 19.6823 30.849 19.6614 30.849Z"
        fill={color}
      />
    </svg>
  );
};

export default Icon2;
