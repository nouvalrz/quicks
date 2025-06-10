import React, { useCallback, useEffect, useState } from "react";
import type { Task } from "../../types/types";
import { formatDateOnlyWithSlash, formatDaysLeft } from "../../lib/formatDate";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ClockIcon,
  HorizontalMoreIcon,
  PencilIcon,
} from "../Icons";
import { AnimatePresence, motion } from "motion/react";
import debounce from "lodash.debounce";
import { useTaskStore } from "../../store/useTaskStore";
import clsx from "clsx";

const TaskItem = ({ task }: { task: Task }) => {
  const [open, setOpen] = useState<boolean>(false);

  const { updateDescription, updateCompleted, updateDueDate } = useTaskStore();

  // for debounce purpose
  const [description, setDescription] = useState<string>(task.description);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedUpdateDescription = useCallback(
    debounce((desc: string) => {
      updateDescription(task.id, desc);
    }, 800),
    []
  );

  useEffect(() => {
    if (description !== task.description) {
      debouncedUpdateDescription(description);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [description, task.description]);

  const toggleOpen = () => setOpen(!open);

  return (
    <div className="flex gap-3 items-start">
      <input
        type="checkbox"
        checked={task.completed}
        className="mt-1"
        onChange={(e) => updateCompleted(task.id, e.target.checked)}
      />
      <div className="flex-grow items-start">
        <div className="flex gap-8 justify-between">
          <p
            className={clsx("font-bold", {
              "line-through text-primary-gray-2": task.completed,
            })}
          >
            {task.title}
          </p>
          <div className="flex gap-2 items-start flex-shrink-0">
            <p className="text-indicator-red">{formatDaysLeft(task.dueDate)}</p>
            {task.dueDate && <p>{formatDateOnlyWithSlash(task.dueDate)}</p>}
            <button onClick={toggleOpen} className="cursor-pointer">
              {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
            <button>
              <HorizontalMoreIcon className="size-6" />
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.1 }}
              className="flex flex-col gap-2 w-full mt-3"
            >
              <div className="flex gap-3 items-center">
                <ClockIcon
                  className="size-5"
                  fill={task.dueDate ? "#2f80ed" : undefined}
                />
                <input
                  type="date"
                  placeholder="Set Date"
                  className="border border-primary-gray-1 px-3 py-1 rounded"
                  value={task.dueDate}
                  onChange={(e) => updateDueDate(task.id, e.target.value)}
                />
              </div>
              <div className="flex gap-3 items-center">
                <PencilIcon
                  className="size-4"
                  fill={task.description ? "#2f80ed" : undefined}
                />
                <textarea
                  className="w-full max-w-md ml-1 px-3 py-1 resize-none"
                  placeholder="No description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                ></textarea>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TaskItem;
