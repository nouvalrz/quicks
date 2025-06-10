import { motion } from "motion/react";
import { InboxIcon } from "./Icons";

const InboxFab = ({
  onClick,
  hideLabel = false,
}: {
  onClick: (value: "task" | "inbox" | null) => void;
  hideLabel?: boolean;
}) => {
  const handleClick = () => {
    onClick("inbox");
  };

  return (
    <motion.div
      className="relative"
      key="task"
      layout
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      {!hideLabel && (
        <p className="absolute -top-8 text-white left-1/2 transform -translate-x-1/2 text-sm">
          Inbox
        </p>
      )}
      <button
        className="p-3 rounded-full bg-primary-gray-4 cursor-pointer"
        onClick={handleClick}
      >
        <InboxIcon className="size-6" />
      </button>
    </motion.div>
  );
};

export default InboxFab;
