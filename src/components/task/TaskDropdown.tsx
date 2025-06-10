const TaskDropdown = ({ onDelete }: { onDelete: () => void }) => {
  return (
    <div className="flex flex-col rounded-md bg-white border border-primary-gray-2  min-w-32 items-stretch">
      <div className="flex justify-start cursor-pointer" onClick={onDelete}>
        <p className="text-red-600  pl-3 py-1">Delete</p>
      </div>
    </div>
  );
};

export default TaskDropdown;
