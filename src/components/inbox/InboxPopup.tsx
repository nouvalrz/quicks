import { useState } from "react";
import BaseCard from "../BaseCard";
import { AnimatePresence, motion } from "motion/react";
import InboxList from "./InboxList";
import InboxDetail from "./InboxDetail";

type InboxViewType = "list" | "detail";

const InboxPopup = ({ isOpen = false }: { isOpen: boolean }) => {
  const [selectedView, setSelectedView] = useState<InboxViewType>("list");
  const [detailIdSelected, setDetailIdSelected] = useState<string | null>(null);

  const handleToDetail = (id: string) => {
    setDetailIdSelected(id);
    setSelectedView("detail");
  };

  const handleToList = () => {
    setSelectedView("list");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-30 right-5 w-full max-w-2xl h-[600px]"
          key="inbox-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
        >
          <BaseCard className="w-full h-full ">
            {selectedView === "list" && (
              <InboxList onItemClick={handleToDetail} />
            )}
            {selectedView === "detail" && detailIdSelected && (
              <InboxDetail id={detailIdSelected} onBack={handleToList} />
            )}
          </BaseCard>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InboxPopup;
