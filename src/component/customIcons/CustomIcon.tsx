import React from "react";
import { Box } from "@mui/material";

function CustomIcon({ iconName }: { iconName: string }) {
  if (iconName === "Q&A")
    return (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_106_1319)">
          <path
            d="M25 0C21.7308 0 19.2308 2.5 19.2308 5.76923V17.3077C19.2308 20.5769 21.7308 23.0769 25 23.0769H36.5385L44.2308 30.7692V23.0769C47.5 23.0769 50 20.5769 50 17.3077V5.76923C50 2.5 47.5 0 44.2308 0H25ZM33.0538 5.76923H36.3577L39.6038 17.3077H36.7192L35.9365 14.4231H33.0519L32.3327 17.3077H29.8077L33.0538 5.76923ZM34.6154 7.69231C34.4231 8.46154 34.2077 9.4 34.0135 9.97692L33.475 12.5H35.7577L35.2154 9.975C34.8327 9.4 34.6154 8.46154 34.6154 7.69231ZM5.76923 19.2308C2.5 19.2308 0 21.7308 0 25V36.5385C0 39.8077 2.5 42.3077 5.76923 42.3077V50L13.4615 42.3077H25C28.2692 42.3077 30.7692 39.8077 30.7692 36.5385V25H25C21.3462 25 18.45 22.5 17.4885 19.2308H5.76923ZM14.6038 24.8192C17.8731 24.8192 19.4115 27.5115 19.4115 30.5885C19.4115 33.2808 18.4865 34.9885 16.9481 35.7577C17.7173 36.1423 18.6288 36.3462 19.5904 36.5385L18.8712 38.4615C17.525 38.0769 16.1288 37.4769 14.7827 36.8981C14.5904 36.7058 14.2538 36.7192 14.0615 36.7192C11.7538 36.5269 9.61538 34.6154 9.61538 30.7692C9.61538 27.5 11.5269 24.8192 14.6038 24.8192ZM14.6038 26.9231C13.0654 26.9231 12.3192 28.6538 12.3192 30.7692C12.3192 33.0769 13.0654 34.6154 14.6038 34.6154C16.1423 34.6154 16.9462 32.8846 16.9462 30.7692C16.9462 28.6538 16.1423 26.9231 14.6038 26.9231Z"
            fill="#06283D"
          />
        </g>
        <defs>
          <clipPath id="clip0_106_1319">
            <rect width="50" height="50" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  if (iconName === "Feedback")
    return (
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.3957 25.166C19.6389 25.166 20.8312 25.6599 21.7102 26.539C22.5893 27.418 23.0832 28.6103 23.0832 29.8535V32.9827L23.0665 33.2077C22.4207 37.6389 18.4415 39.7681 11.7644 39.7681C5.11234 39.7681 1.06859 37.6639 0.19567 33.2848L0.166504 32.9785V29.8535C0.166504 28.6103 0.660364 27.418 1.53944 26.539C2.41852 25.6599 3.6108 25.166 4.854 25.166H18.3957ZM11.6248 8.49935C12.5824 8.49935 13.5306 8.68795 14.4152 9.05439C15.2999 9.42083 16.1037 9.95793 16.7808 10.635C17.4579 11.3121 17.995 12.116 18.3615 13.0006C18.7279 13.8853 18.9165 14.8335 18.9165 15.791C18.9165 16.7486 18.7279 17.6967 18.3615 18.5814C17.995 19.4661 17.4579 20.2699 16.7808 20.947C16.1037 21.6241 15.2999 22.1612 14.4152 22.5276C13.5306 22.8941 12.5824 23.0827 11.6248 23.0827C9.69097 23.0827 7.8363 22.3145 6.46885 20.947C5.1014 19.5795 4.33317 17.7249 4.33317 15.791C4.33317 13.8571 5.1014 12.0025 6.46885 10.635C7.8363 9.26758 9.69097 8.49935 11.6248 8.49935V8.49935ZM37.1457 0.166016C38.3889 0.166016 39.5812 0.659876 40.4602 1.53895C41.3393 2.41803 41.8332 3.61031 41.8332 4.85352V12.1452C41.8332 12.7608 41.7119 13.3703 41.4764 13.939C41.2408 14.5077 40.8955 15.0245 40.4602 15.4597C40.025 15.895 39.5082 16.2403 38.9395 16.4759C38.3708 16.7114 37.7612 16.8327 37.1457 16.8327H33.9103L28.6165 21.4306C28.3148 21.6928 27.9441 21.8627 27.5485 21.92C27.153 21.9773 26.7493 21.9196 26.3856 21.7538C26.0219 21.588 25.7136 21.3211 25.4975 20.9849C25.2813 20.6487 25.1664 20.2574 25.1665 19.8577V16.8035C24.0207 16.6754 22.9622 16.1295 22.1935 15.2701C21.4249 14.4107 20.9999 13.2982 20.9998 12.1452V4.85352C20.9998 3.61031 21.4937 2.41803 22.3728 1.53895C23.2519 0.659876 24.4441 0.166016 25.6873 0.166016H37.1457Z"
          fill="#06283D"
        />
      </svg>
    );
  if (iconName === "ErrorOutline")
    return (
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.9998 4.33268C30.1894 4.33268 37.6665 11.8098 37.6665 20.9993C37.6665 30.1889 30.1894 37.666 20.9998 37.666C11.8103 37.666 4.33317 30.1889 4.33317 20.9993C4.33317 11.8098 11.8103 4.33268 20.9998 4.33268ZM20.9998 0.166016C9.49359 0.166016 0.166504 9.4931 0.166504 20.9993C0.166504 32.5056 9.49359 41.8327 20.9998 41.8327C32.5061 41.8327 41.8332 32.5056 41.8332 20.9993C41.8332 9.4931 32.5061 0.166016 20.9998 0.166016ZM23.0832 27.2493H18.9165V31.416H23.0832V27.2493ZM18.9165 23.0827H23.0832L24.1248 10.5827H17.8748L18.9165 23.0827Z"
          fill="#06283D"
        />
      </svg>
    );
  if (iconName === "DocumentView")
    return (
      <svg
        width="39"
        height="30"
        viewBox="0 0 39 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.2595 22.5C29.2595 23.4591 28.2589 24.275 26.9713 24.275C25.6836 24.275 24.683 23.4591 24.683 22.5C24.683 21.5409 25.6836 20.725 26.9713 20.725C28.2589 20.725 29.2595 21.5409 29.2595 22.5Z"
          fill="#06283D"
          stroke="white"
          stroke-width="0.2"
        />
        <path
          d="M36.1687 22.0563L36.1686 22.0563L36.1703 22.0594L36.4105 22.5L36.1703 22.9406L36.1703 22.9405L36.1687 22.9437C35.4411 24.3989 34.1836 25.6583 32.5479 26.563C30.9129 27.4674 28.974 27.9762 26.9714 28.025C24.9689 27.9762 23.03 27.4674 21.3949 26.563C19.7592 25.6583 18.5017 24.3989 17.7742 22.9437L17.7742 22.9437L17.7725 22.9406L17.5324 22.5L17.7725 22.0594L17.7726 22.0595L17.7742 22.0563C18.5017 20.6011 19.7592 19.3417 21.3949 18.437C23.03 17.5326 24.9689 17.0238 26.9714 16.975C28.974 17.0238 30.9129 17.5326 32.5479 18.437C34.1836 19.3417 35.4411 20.6011 36.1687 22.0563ZM31.8479 22.5002V22.5C31.8479 21.7323 31.5578 20.9848 31.0191 20.3518C30.4807 19.7192 29.7182 19.2291 28.8302 18.9404C27.9422 18.6516 26.9659 18.5762 26.0242 18.7233C25.0825 18.8703 24.215 19.2336 23.5322 19.7697C22.8492 20.3059 22.3802 20.9922 22.1898 21.7439C21.9992 22.4961 22.0974 23.2754 22.4701 23.9817C22.8424 24.6873 23.4706 25.2865 24.2713 25.7066C25.0721 26.1266 26.0116 26.35 26.9714 26.35V26.25L26.9715 26.35C28.2576 26.3487 29.4939 25.9473 30.4089 25.2289C31.3245 24.5101 31.8463 23.5297 31.8479 22.5002Z"
          fill="#06283D"
          stroke="white"
          stroke-width="0.2"
        />
        <path
          d="M9.15957 16.0375H14.9302V17.7125H9.15957V16.0375Z"
          fill="#06283D"
          stroke="white"
          stroke-width="0.2"
        />
        <path
          d="M9.15957 11.35H23.289V13.025H9.15957V11.35Z"
          fill="#06283D"
          stroke="white"
          stroke-width="0.2"
        />
        <path
          d="M9.15957 6.6625H23.289V8.3375H9.15957V6.6625Z"
          fill="#06283D"
          stroke="white"
          stroke-width="0.2"
        />
        <path
          d="M5.47723 1.975H26.9712C27.5843 1.97646 28.1683 2.16851 28.5962 2.50447C29.0236 2.84 29.2578 3.2888 29.2595 3.75038V13.9625H27.0713V3.75V3.65H26.9713H5.47711H5.37711V3.75V26.25V26.35H5.47711H14.9301V28.025H5.47735C4.86419 28.0236 4.28015 27.8315 3.85221 27.4955C3.42489 27.16 3.19069 26.7113 3.18887 26.2498V3.75019C3.19069 3.28868 3.42489 2.83995 3.85221 2.50447C4.28013 2.16851 4.86411 1.97646 5.47723 1.975Z"
          fill="#06283D"
          stroke="white"
          stroke-width="0.2"
        />
      </svg>
    );

  return <Box></Box>;
}

export default CustomIcon;