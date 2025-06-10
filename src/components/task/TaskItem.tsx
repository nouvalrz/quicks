import React, { useCallback, useEffect, useRef, useState } from "react";
import { tags, type Task } from "../../types/types";
import { formatDateOnlyWithSlash, formatDaysLeft } from "../../lib/formatDate";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ClockIcon,
  HorizontalMoreIcon,
  PencilIcon,
  TagLabelIcon,
} from "../Icons";
import { AnimatePresence, motion } from "motion/react";
import debounce from "lodash.debounce";
import { useTaskStore } from "../../store/useTaskStore";
import clsx from "clsx";
import TaskDropdown from "./TaskDropdown";
import TaskTagDropdown from "./TaskTagDropdown";

const TaskItem = ({ task }: { task: Task }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [dropdownTagOpen, setDropdownTagOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTagRef = useRef<HTMLDivElement>(null);

  const { updateDescription, updateCompleted, updateDueDate, deleteTask } =
    useTaskStore();

  // for debounce purpose
  const [description, setDescription] = useState<string>(task.description);

  const toggleOpen = () => setOpen(!open);
  const toggleDropdownOpen = () => setDropdownOpen(!dropdownOpen);
  const toggleDropdownTagOpen = () => setDropdownTagOpen(!dropdownTagOpen);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedUpdateDescription = useCallback(
    debounce((desc: string) => {
      updateDescription(task.id, desc);
    }, 800),
    []
  );

  const handleDelete = () => {
    deleteTask(task.id);
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (description !== task.description) {
      debouncedUpdateDescription(description);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [description, task.description]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }

      if (
        dropdownTagRef.current &&
        !dropdownTagRef.current.contains(event.target as Node)
      ) {
        setDropdownTagOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

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
            <button
              onClick={toggleDropdownOpen}
              className="relative cursor-pointer"
            >
              <HorizontalMoreIcon className="size-6" />
              {dropdownOpen && (
                <div className="absolute -bottom-9 right-0 " ref={dropdownRef}>
                  <TaskDropdown onDelete={handleDelete} />
                </div>
              )}
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
              <div
                className="w-full flex gap-2 bg-primary-gray-4 rounded-md px-3 py-2 items-center cursor-pointer relative"
                onClick={toggleDropdownTagOpen}
              >
                <TagLabelIcon
                  className="size-5"
                  fill={task.tags.length > 0 ? "#2f80ed" : undefined}
                />
                <div className="flex gap-3 flex-grow overflow-x-scroll">
                  {task.tags.map((tag) => (
                    <div
                      className={clsx(
                        tags[tag],
                        "py-1 px-2 rounded-md cursor-pointer flex-shrink-0"
                      )}
                      key={tag}
                    >
                      <p className="font-bold">{tag}</p>
                    </div>
                  ))}
                </div>
                {dropdownTagOpen && (
                  <div
                    className="absolute -bottom-[210px] left-0"
                    ref={dropdownTagRef}
                  >
                    <TaskTagDropdown taskId={task.id} taskTags={task.tags} />
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TaskItem;
