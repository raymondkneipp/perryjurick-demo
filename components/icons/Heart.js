const Heart = ({ fill = false, size = 30 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 7C8.0151 7 6 8.9944 6 11.455C6 13.4413 6.7875 18.1555 14.5392 22.921C14.6781 23.0055 14.8375 23.0502 15 23.0502C15.1625 23.0502 15.3219 23.0055 15.4608 22.921C23.2125 18.1555 24 13.4413 24 11.455C24 8.9944 21.9849 7 19.5 7C17.0151 7 15 9.7 15 9.7C15 9.7 12.9849 7 10.5 7Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fill ? "currentColor" : "inherit"}
    />
  </svg>
);

export default Heart;
