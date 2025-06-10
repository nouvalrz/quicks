import clsx from "clsx";

export const QuicksFabIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.4427 12.3359C32.3618 12.9486 32.6101 14.1904 31.9974 15.1094L24.737 26H35C35.7376 26 36.4153 26.406 36.7634 27.0563C37.1114 27.7066 37.0732 28.4957 36.6641 29.1094L27.3308 43.1094C26.7181 44.0285 25.4763 44.2768 24.5573 43.6641C23.6382 43.0514 23.3899 41.8097 24.0026 40.8906L31.263 30H21C20.2624 30 19.5847 29.5941 19.2367 28.9437C18.8886 28.2934 18.9268 27.5043 19.3359 26.8906L28.6692 12.8906C29.2819 11.9716 30.5237 11.7232 31.4427 12.3359Z"
        fill="white"
        style={{ fill: "white", fillOpacity: 1 }}
      />
    </svg>
  );
};

export const TaskIcon = ({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.92984 4.40063H26.5614C27.9445 4.40063 29.076 5.53221 29.076 6.91526V23.2603C29.076 24.6433 27.9445 25.7749 26.5614 25.7749H3.92984C2.5468 25.7749 1.41522 24.6433 1.41522 23.2603V6.91526C1.41522 5.53221 2.5468 4.40063 3.92984 4.40063ZM3.9298 6.91528V23.2603H13.9883V6.91528H3.9298ZM26.5614 23.2603H16.5029V6.91528H26.5614V23.2603ZM25.3042 11.3158H17.7603V13.2018H25.3042V11.3158ZM17.7603 14.4591H25.3042V16.3451H17.7603V14.4591ZM25.3042 17.6024H17.7603V19.4883H25.3042V17.6024Z"
        fill="#F8B76B"
        style={{ fill: fill || "#F8B76B", fillOpacity: 1 }}
      />
    </svg>
  );
};

export const InboxIcon = ({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.8187 2.51453H4.47368C3.78216 2.51453 3.21637 3.08032 3.21637 3.77184V21.3742L8.24561 16.3449H20.8187C21.5102 16.3449 22.076 15.7791 22.076 15.0876V3.77184C22.076 3.08032 21.5102 2.51453 20.8187 2.51453ZM19.5614 5.02908V13.8302H7.20201L6.46019 14.5721L5.73095 15.3013V5.02908H19.5614ZM24.5907 7.54381H27.1053C27.7968 7.54381 28.3626 8.10959 28.3626 8.80112V27.6608L23.3334 22.6315H9.50296C8.81144 22.6315 8.24565 22.0657 8.24565 21.3742V18.8596H24.5907V7.54381Z"
        fill="#8885FF"
        style={{ fill: fill || "#8885FF", fillOpacity: 1 }}
      />
    </svg>
  );
};

export const SearchIcon = ({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <svg
      width="32"
      height="31"
      viewBox="0 0 32 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.0804 18.9783H22.4434L31.0526 27.6047L28.4819 30.1754L19.8555 21.5662V20.2032L19.3896 19.7201C17.4228 21.4109 14.8694 22.4289 12.0916 22.4289C5.89781 22.4289 0.877197 17.4082 0.877197 11.2144C0.877197 5.02061 5.89781 0 12.0916 0C18.2854 0 23.3061 5.02061 23.3061 11.2144C23.3061 13.9922 22.2881 16.5456 20.5973 18.5124L21.0804 18.9783ZM4.32774 11.2145C4.32774 15.5104 7.79558 18.9783 12.0916 18.9783C16.3876 18.9783 19.8554 15.5104 19.8554 11.2145C19.8554 6.91846 16.3876 3.45062 12.0916 3.45062C7.79558 3.45062 4.32774 6.91846 4.32774 11.2145Z"
        fill="white"
        style={{ fill: fill || "white", fillOpacity: 1 }}
      />
    </svg>
  );
};

export const LoadingIcon = ({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <svg
      width="86"
      height="86"
      viewBox="0 0 86 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8009 60.5045L67.6057 24.9025L67.6796 25.0058C67.6551 24.9713 67.6306 24.9369 67.606 24.9025C57.7747 11.1492 38.6557 7.96983 24.9024 17.8011C11.1492 27.6323 7.96978 46.7513 17.8009 60.5045Z"
        style={{
          fill: fill || "#C4C4C4",
          fillOpacity: 1,
        }}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M67.6058 24.9025L17.8009 60.5047L17.7771 60.4715C17.785 60.4826 17.7929 60.4936 17.8008 60.5047C27.6321 74.2579 46.7511 77.4373 60.5044 67.6061C74.2577 57.7748 77.4371 38.6557 67.6058 24.9025Z"
        fill="#F8F8F8"
        style={{
          fill: "#F8F8F8",
          fillOpacity: 1,
        }}
      />
      <path
        d="M25.5407 58.2704C25.5407 60.6288 23.6288 62.5407 21.2704 62.5407C18.9119 62.5407 17 60.6288 17 58.2704C17 55.9119 18.9119 54 21.2704 54C23.6288 54 25.5407 55.9119 25.5407 58.2704Z"
        style={{
          fill: fill || "#C4C4C4",
          fillOpacity: 1,
        }}
      />
      <path
        d="M68.3256 27.2472C68.3256 29.6056 66.4137 31.5175 64.0553 31.5175C61.6968 31.5175 59.7849 29.6056 59.7849 27.2472C59.7849 24.8887 61.6968 22.9768 64.0553 22.9768C66.4137 22.9768 68.3256 24.8887 68.3256 27.2472Z"
        style={{
          fill: fill || "#C4C4C4",
          fillOpacity: 1,
        }}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.1859 55.9403C31.4963 66.1671 45.7131 68.5313 55.9399 61.2208C66.1666 53.9104 68.5308 39.6937 61.2204 29.4669C53.9099 19.2401 39.6932 16.8759 29.4664 24.1864C19.2396 31.4968 16.8755 45.7135 24.1859 55.9403Z"
        fill="white"
        style={{
          fill: "white",
          fillOpacity: 1,
        }}
      />
    </svg>
  );
};

export const InboxItemIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="51"
      height="34"
      viewBox="0 0 51 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <path
        d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z"
        fill="#E0E0E0"
        style={{
          fill: "#E0E0E0",
          fillOpacity: 1,
        }}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 11C15.3425 11 14 12.3425 14 14C14 15.6575 15.3425 17 17 17C18.6575 17 20 15.6575 20 14C20 12.3425 18.6575 11 17 11ZM18.5 14C18.5 13.175 17.825 12.5 17 12.5C16.175 12.5 15.5 13.175 15.5 14C15.5 14.825 16.175 15.5 17 15.5C17.825 15.5 18.5 14.825 18.5 14ZM21.5 21.5C21.35 20.9675 19.025 20 17 20C14.9825 20 12.6725 20.96 12.5 21.5H21.5ZM11 21.5C11 19.505 14.9975 18.5 17 18.5C19.0025 18.5 23 19.505 23 21.5V23H11V21.5Z"
        fill="black"
        style={{
          fill: "black",
          fillOpacity: 0.54,
        }}
      />
      <path
        d="M51 17C51 26.3888 43.3888 34 34 34C24.6112 34 17 26.3888 17 17C17 7.61116 24.6112 0 34 0C43.3888 0 51 7.61116 51 17Z"
        fill="#2F80ED"
        style={{
          fill: "#2F80ED",
          fillOpacity: 1,
        }}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 11C32.3425 11 31 12.3425 31 14C31 15.6575 32.3425 17 34 17C35.6575 17 37 15.6575 37 14C37 12.3425 35.6575 11 34 11ZM35.5 14C35.5 13.175 34.825 12.5 34 12.5C33.175 12.5 32.5 13.175 32.5 14C32.5 14.825 33.175 15.5 34 15.5C34.825 15.5 35.5 14.825 35.5 14ZM38.5 21.5C38.35 20.9675 36.025 20 34 20C31.9825 20 29.6725 20.96 29.5 21.5H38.5ZM28 21.5C28 19.505 31.9975 18.5 34 18.5C36.0025 18.5 40 19.505 40 21.5V23H28V21.5Z"
        fill="white"
        style={{
          fill: "white",
          fillOpacity: 1,
        }}
      />
    </svg>
  );
};
export const LeftArrowIcon = ({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <svg
      width="32"
      height="31"
      viewBox="0 0 32 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <path
        d="M25.9883 13.8304H10.6868L17.7152 6.80204L15.9298 5.02924L5.87134 15.0877L15.9298 25.1462L17.7026 23.3734L10.6868 16.345H25.9883V13.8304Z"
        fill="#F2F2F2"
        style={{
          fill: fill || "#F2F2F2",
          fillOpacity: 1,
        }}
      />
    </svg>
  );
};

export const CloseIcon = ({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <path
        d="M21 2.115L18.885 0L10.5 8.385L2.115 0L0 2.115L8.385 10.5L0 18.885L2.115 21L10.5 12.615L18.885 21L21 18.885L12.615 10.5L21 2.115Z"
        fill={fill || "#F2F2F2"}
        style={{
          fill: fill || "#F2F2F2",
          fillOpacity: 1,
        }}
      />
    </svg>
  );
};

export const HorizontalMoreIcon = ({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.73685 12.5731C6.35381 12.5731 5.22223 13.7046 5.22223 15.0877C5.22223 16.4707 6.35381 17.6023 7.73685 17.6023C9.11989 17.6023 10.2515 16.4707 10.2515 15.0877C10.2515 13.7046 9.11989 12.5731 7.73685 12.5731ZM22.8246 12.5731C21.4415 12.5731 20.3099 13.7046 20.3099 15.0877C20.3099 16.4707 21.4415 17.6023 22.8246 17.6023C24.2076 17.6023 25.3392 16.4707 25.3392 15.0877C25.3392 13.7046 24.2076 12.5731 22.8246 12.5731ZM12.7661 15.0877C12.7661 13.7046 13.8977 12.5731 15.2807 12.5731C16.6637 12.5731 17.7953 13.7046 17.7953 15.0877C17.7953 16.4707 16.6637 17.6023 15.2807 17.6023C13.8977 17.6023 12.7661 16.4707 12.7661 15.0877Z"
        fill={fill || "#4F4F4F"}
      />
    </svg>
  );
};

export const ChevronUpIcon = ({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <g id="expand_more_24px">
        <path
          id="icon/navigation/expand_more_24px"
          d="M6.175 13.0875L10 9.27084L13.825 13.0875L15 11.9125L10 6.9125L5 11.9125L6.175 13.0875Z"
          style={{
            fill: fill || "#4F4F4F",
            fillOpacity: 1,
          }}
        />
      </g>
    </svg>
  );
};

export const ChevronDownIcon = ({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <g id="expand_more_24px">
        <path
          id="icon/navigation/expand_more_24px"
          d="M13.825 6.91251L10 10.7292L6.175 6.91251L5 8.08751L10 13.0875L15 8.08751L13.825 6.91251Z"
          style={{
            fill: fill || "#4F4F4F",
            fillOpacity: 1,
          }}
        />
      </g>
    </svg>
  );
};

export const PencilIcon = ({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.3092 0C18.9949 0 18.668 0.125731 18.4291 0.36462L16.1282 2.6655L20.8431 7.38041L23.144 5.07953C23.6343 4.58918 23.6343 3.79708 23.144 3.30673L20.2019 0.36462C19.9504 0.113158 19.6361 0 19.3092 0ZM14.7831 7.569L15.9398 8.72573L4.54857 20.117H3.39185V18.9602L14.7831 7.569ZM0.877197 17.9167L14.783 4.01081L19.498 8.72572L5.59211 22.6316H0.877197V17.9167Z"
        style={{
          fill: fill || "#4F4F4F",
          fillOpacity: 1,
        }}
      />
    </svg>
  );
};

export const ClockIcon = ({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <g id="schedule_24px">
        <path
          id="icon/action/schedule_24px"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.2508 2.51465C8.31048 2.51465 2.69031 8.1474 2.69031 15.0877C2.69031 22.0281 8.31048 27.6608 15.2508 27.6608C22.2038 27.6608 27.8365 22.0281 27.8365 15.0877C27.8365 8.1474 22.2038 2.51465 15.2508 2.51465ZM15.2637 25.1462C9.70636 25.1462 5.20519 20.6451 5.20519 15.0878C5.20519 9.53045 9.70636 5.02928 15.2637 5.02928C20.821 5.02928 25.3221 9.53045 25.3221 15.0878C25.3221 20.6451 20.821 25.1462 15.2637 25.1462ZM14.0061 8.80121H15.8921V15.4021L21.55 18.7591L20.607 20.3056L14.0061 16.3451V8.80121Z"
          style={{
            fill: fill || "#4F4F4F",
            fillOpacity: 1,
          }}
        />
      </g>
    </svg>
  );
};
