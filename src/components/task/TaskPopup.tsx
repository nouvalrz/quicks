import BaseCard from "../BaseCard";
import { AnimatePresence, motion } from "motion/react";
import TaskList from "./TaskList";

const TaskPopup = ({ isOpen = false }: { isOpen: boolean }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-30 right-5 w-full max-w-2xl h-[580px]"
          key="inbox-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
        >
          <BaseCard className="w-full h-full pb-6">
            <TaskList />
          </BaseCard>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TaskPopup;
