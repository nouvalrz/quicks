import BaseCard from "../BaseCard";
import { AnimatePresence, motion } from "motion/react";
import InboxSearch from "./InboxSearch";
import useSWR from "swr";
import type { Inbox } from "../../types/types";
import { fetcher } from "../../lib/fetcher";
import InboxLoading from "./InboxLoading";
import InboxItem from "./InboxItem";

const InboxCard = ({ isOpen = false }: { isOpen: boolean }) => {
  const { data, isLoading, error } = useSWR<Inbox[]>("/api/inbox", fetcher);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-30 right-5 w-full max-w-2xl h-[580px]"
          key="inbox-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
        >
          <BaseCard className="w-full h-full overflow-y-scroll">
            <InboxSearch />
            {isLoading ? (
              <div className="h-full flex flex-col items-center justify-center">
                <InboxLoading />
              </div>
            ) : (
              <div className="flex flex-col">
                {data &&
                  data.map((inbox, index) => (
                    <>
                      <InboxItem inbox={inbox} />
                      {index !== data.length - 1 && (
                        <hr className="border-primary-gray-2" />
                      )}
                    </>
                  ))}
              </div>
            )}
          </BaseCard>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InboxCard;
