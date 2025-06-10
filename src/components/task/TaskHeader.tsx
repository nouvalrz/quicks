import React from "react";

const TaskHeader = ({
  categoryValue,
  onCategoryChange,
  onNewTask,
}: {
  categoryValue: string;
  onCategoryChange: (value: string) => void;
  onNewTask: () => void;
}) => {
  return (
    <div className="w-full flex justify-between">
      <select
        className="border px-3 py-2 border-primary-gray-1 rounded-md"
        value={categoryValue}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">My Tasks</option>
        <option value="Personal Errands">Personal Errands</option>
        <option value="Urgent To-Do">Urgent To-Do</option>
      </select>
      <button
        className="bg-primary text-white rounded-md px-3 py-2 font-bold cursor-pointer"
        onClick={onNewTask}
      >
        New Task
      </button>
    </div>
  );
};

export default TaskHeader;
