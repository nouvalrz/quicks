import { useState } from "react";
import { InboxIcon, QuicksFabIcon, TaskIcon } from "./Icons";
import { AnimatePresence } from "motion/react";
import InboxFab from "./InboxFab";
import TaskFab from "./TaskFab";
import clsx from "clsx";
import InboxPopup from "./inbox/InboxPopup";
import TaskPopup from "./task/TaskPopup";

const QuikcsFab = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => {
    setSelected(null);
    setOpen(!open);
  };

  const [selected, setSelected] = useState<"task" | "inbox" | null>(null);

  return (
    <div className="flex gap-6 fixed bottom-5 right-5 items-center">
      <AnimatePresence>
        {open && (
          <>
            {selected !== "task" && (
              <TaskFab onClick={setSelected} hideLabel={!!selected} />
            )}
            {selected !== "inbox" && (
              <InboxFab onClick={setSelected} hideLabel={!!selected} />
            )}
          </>
        )}
      </AnimatePresence>
      {!selected && (
        <button
          className="bg-primary rounded-full  cursor-pointer p-2 relative z-10"
          onClick={toggleOpen}
        >
          <QuicksFabIcon className="size-10" />
        </button>
      )}
      {selected && (
        <div className="relative">
          <button
            className="p-4 bg-gray-600 absolute top-0 -left-3 rounded-full h-14 w-14 cursor-pointer"
            onClick={() => setSelected(null)}
          ></button>
          <button
            className={clsx("rounded-full  cursor-pointer p-4 relative z-10", {
              "bg-indicator-orange": selected === "task",
              "bg-indicator-indigo": selected === "inbox",
            })}
            onClick={toggleOpen}
          >
            {selected === "task" && (
              <TaskIcon className="size-6" fill="white" />
            )}
            {selected === "inbox" && (
              <InboxIcon className="size-6" fill="white" />
            )}
          </button>
        </div>
      )}
      {selected === "inbox" && <InboxPopup isOpen={selected === "inbox"} />}
      {selected === "task" && <TaskPopup isOpen={selected === "task"} />}
    </div>
  );
};

export default QuikcsFab;
