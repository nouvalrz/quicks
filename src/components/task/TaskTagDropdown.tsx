import clsx from "clsx";
import { tags, type TaskTag } from "../../types/types";
import { useTaskStore } from "../../store/useTaskStore";

const TaskTagDropdown = ({
  taskId,
  taskTags,
}: {
  taskId: string;
  taskTags: TaskTag[];
}) => {
  const { toggleTag } = useTaskStore();

  const handleClickTag = (tag: TaskTag) => {
    toggleTag(taskId, tag);
  };

  return (
    <div className="flex flex-col rounded-md bg-white border border-primary-gray-2 min-w-56 items-stretch p-3 max-h-[210px] overflow-y-scroll">
      <div className="flex flex-col gap-2">
        {Object.entries(tags).map(([key, value]) => (
          <div
            className={clsx(value, "w-full p-2 rounded-md cursor-pointer", {
              "border border-primary": taskTags.includes(key as TaskTag),
            })}
            key={key}
            onClick={() => handleClickTag(key as TaskTag)}
          >
            <p className="font-bold">{key}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskTagDropdown;
