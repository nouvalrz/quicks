import { motion } from "motion/react";
import { TaskIcon } from "./Icons";

const TaskFab = ({
  onClick,
}: {
  onClick: (value: "task" | "inbox" | null) => void;
}) => {
  return (
    <motion.div
      className="relative"
      key="task"
      layout
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <p className="absolute -top-8 text-white left-1/2 transform -translate-x-1/2 text-sm">
        Task
      </p>
      <button
        className="p-3 rounded-full bg-primary-gray-4 cursor-pointer"
        onClick={() => onClick("task")}
      >
        <TaskIcon className="size-6" />
      </button>
    </motion.div>
  );
};

export default TaskFab;
