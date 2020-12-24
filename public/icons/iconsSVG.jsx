import React from 'react';

function RightTick() {
  return (
    <svg
      width="64"
      height="62"
      viewBox="0 0 64 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M63 31C63 47.5389 49.151 61 32 61C14.849 61 1 47.5389 1 31C1 14.4611 14.849 1 32 1C49.151 1 63 14.4611 63 31Z"
        stroke="#75CC31"
        strokeWidth="2"
      />
      <path
        d="M26.5001 38.6999L18.8001 30.9999L16.2334 33.5666L26.5001 43.8333L48.5001 21.8333L45.9334 19.2666L26.5001 38.6999Z"
        fill="#75CC31"
      />
    </svg>
  );
}

function AddTag() {
  return (
    <svg
      width="64"
      height="62"
      viewBox="0 0 64 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M63 31C63 47.5389 49.151 61 32 61C14.849 61 1 47.5389 1 31C1 14.4611 14.849 1 32 1C49.151 1 63 14.4611 63 31Z"
        stroke="#4D472C"
        strokeWidth="2"
      />
      <path
        d="M46.985 19C46.985 17.35 45.65 16 44 16H20C18.35 16 17 17.35 17 19V37C17 38.65 18.35 40 20 40H41L47 46L46.985 19ZM39.5 29.5H33.5V35.5H30.5V29.5H24.5V26.5H30.5V20.5H33.5V26.5H39.5V29.5Z"
        fill="#4D472C"
      />
    </svg>
  );
}

function Cross() {
  return (
    <svg
      width="64"
      height="62"
      viewBox="0 0 64 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M63 31C63 47.5389 49.151 61 32 61C14.849 61 1 47.5389 1 31C1 14.4611 14.849 1 32 1C49.151 1 63 14.4611 63 31Z"
        stroke="#FF5E5E"
        strokeWidth="2"
      />
      <path
        d="M44.8332 20.7517L42.2482 18.1667L31.9998 28.4151L21.7515 18.1667L19.1665 20.7517L29.4148 31.0001L19.1665 41.2484L21.7515 43.8334L31.9998 33.5851L42.2482 43.8334L44.8332 41.2484L34.5848 31.0001L44.8332 20.7517Z"
        fill="#FF5E5E"
      />
    </svg>
  );
}

export { RightTick, AddTag, Cross };
