import React, { useState } from "react";
import type { Task } from "../../types/types";
import { formatDateOnlyWithSlash } from "../../lib/formatDate";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ClockIcon,
  HorizontalMoreIcon,
  PencilIcon,
} from "../Icons";
import { AnimatePresence, motion } from "motion/react";
import { useTaskStore } from "../../store/useTaskStore";

const TaskForm = ({ onClose }: { onClose: () => void }) => {
  const { submitTask } = useTaskStore();
  const [open, setOpen] = useState<boolean>(false);
  const [form, setForm] = useState<Task>({
    id: "",
    categoryName: "Personal Errands",
    completed: false,
    description: "",
    dueDate: "",
    title: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setForm((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (!form.title.trim()) {
      return;
    }

    submitTask(form);
    onClose();
  };

  const toggleOpen = () => setOpen(!open);

  return (
    <div className="flex gap-3 items-start pb-3">
      <input
        type="checkbox"
        className="mt-1"
        checked={form.completed}
        onChange={handleFormChange}
        name="completed"
      />
      <div className="flex-grow items-start">
        <div className="flex gap-8 justify-between">
          <input
            type="text"
            className="border border-primary-gray-1 px-3 py-1 rounded w-full max-w-xs"
            placeholder="Type Task Title"
            name="title"
            onChange={handleFormChange}
            value={form.title}
            onKeyDown={handleEnter}
          />
          <div className="flex gap-2 items-start">
            {form.dueDate && <p>{formatDateOnlyWithSlash(form.dueDate)}</p>}
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
                <ClockIcon className="size-5" />
                <input
                  type="date"
                  className="border border-primary-gray-1 px-3 py-1 rounded"
                  placeholder="Set Date"
                  value={form.dueDate}
                  onChange={handleFormChange}
                  name="dueDate"
                />
              </div>
              <div className="flex gap-3 items-center">
                <PencilIcon className="size-4" />
                <textarea
                  className="w-full max-w-md ml-1 px-3 py-1 resize-none"
                  placeholder="No description"
                  name="description"
                  value={form.description}
                  onChange={handleFormChange}
                ></textarea>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TaskForm;
