import { useEffect, useRef, useState } from "react";
import TaskHeader from "./TaskHeader";
import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";
import type { Task } from "../../types/types";
import { useTaskStore } from "../../store/useTaskStore";
import TaskLoading from "./TaskLoading";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { data, isLoading, error } = useSWR<Task[]>("/api/tasks", fetcher);
  const { initTasks, initialized, tasks } = useTaskStore();
  const [showForm, setShowForm] = useState<boolean>(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const toggleShowForm = () => setShowForm(!showForm);

  useEffect(() => {
    if (showForm && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showForm]);

  useEffect(() => {
    if (data && data.length > 0) {
      initTasks(data);
    }
  }, [data, initTasks]);

  const filteredTasks = tasks.filter((task) =>
    !selectedCategory
      ? true
      : task.categoryName.toString() === selectedCategory.toString()
  );

  return (
    <div className="w-full h-full overflow-y-scroll py-6 px-8 flex flex-col">
      <TaskHeader
        categoryValue={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onNewTask={toggleShowForm}
      />
      {!initialized && (
        <div className="h-full flex flex-col justify-center items-center flex-grow">
          <TaskLoading />
        </div>
      )}
      {initialized && (
        <div className="h-full flex flex-col flex-grow gap-6 mt-6">
          {filteredTasks.map((task) => (
            <>
              <TaskItem task={task} key={task.id} />
              <hr className="border-primary-gray-1" />
            </>
          ))}
          {showForm && <TaskForm onClose={toggleShowForm} />}

          <div ref={bottomRef} />
        </div>
      )}
      {!isLoading && error && (
        <div className="h-full flex flex-col items-center justify-center flex-grow">
          <p>Sorry, something went wrong!</p>
          <p>Error : {error}</p>
        </div>
      )}
    </div>
  );
};

export default TaskList;
