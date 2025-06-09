import useSWR from "swr";
import InboxDetailHeader from "./InboxDetailHeader";
import type { Inbox } from "../../types/types";
import { fetcher } from "../../lib/fetcher";
import InboxLoading from "./InboxLoading";
import { useInboxDetailStore } from "../../store/useInboxDetailStore";
import { useEffect } from "react";
import InboxChatList from "./InboxChatList";

const InboxDetail = ({ id, onBack }: { id: number; onBack: () => void }) => {
  const { initInbox, initialized } = useInboxDetailStore();
  const { data, isLoading, error } = useSWR<Inbox>("/api/inbox/" + id, fetcher);

  useEffect(() => {
    if (data) {
      initInbox(data);
    }
  }, [data, initInbox]);

  return (
    <div className="h-full">
      {!initialized ? (
        <div className="h-full flex flex-col justify-center items-center">
          <InboxLoading />
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <InboxDetailHeader onBack={onBack} />
          <div className="flex-grow  w-full overflow-scroll my-4 ">
            <InboxChatList />
          </div>
        </div>
      )}

      {!isLoading && error && (
        <div className="h-full flex flex-col items-center justify-center">
          <p>Sorry, something went wrong!</p>
          <p>Error : {error}</p>
        </div>
      )}
    </div>
  );
};

export default InboxDetail;
