import { LoadingIcon } from "../Icons";

const TaskLoading = () => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <LoadingIcon className="animate-spin size-16" />
      <p className="font-medium">Loading Task List ...</p>
    </div>
  );
};

export default TaskLoading;
