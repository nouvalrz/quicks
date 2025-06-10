import useSWR from "swr";
import InboxDetailHeader from "./InboxDetailHeader";
import type { Inbox } from "../../types/types";
import { fetcher } from "../../lib/fetcher";
import InboxLoading from "./InboxLoading";
import { useInboxDetailStore } from "../../store/useInboxDetailStore";
import { useEffect, useRef, useState } from "react";
import InboxChatList from "./InboxChatList";
import InboxChatForm from "./InboxChatForm";
import { LoadingIcon } from "../Icons";

const InboxDetail = ({ id, onBack }: { id: string; onBack: () => void }) => {
  const { initInbox, initialized, inbox } = useInboxDetailStore();
  const now = useRef(Date.now()).current;
  const { data, isLoading, error } = useSWR<Inbox>(
    `/api/inbox/${id}?t=${now}`,
    fetcher
  );

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isScrollBottom, setIsScrollBottom] = useState<boolean>(true);

  const scrollToBottom = () => {
    const div = scrollRef.current;
    if (div) {
      div.scrollTo({ top: div.scrollHeight, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const div = scrollRef.current;

    if (div) {
      setIsScrollBottom(div.scrollHeight - div.scrollTop === div.clientHeight);
    }
  };

  useEffect(() => {
    if (data) {
      initInbox(data);
    }
  }, [data, initInbox]);

  useEffect(() => {
    if (initialized) {
      scrollToBottom();
    }
  }, [initialized]);

  return (
    <div className="h-full">
      {!initialized ? (
        <div className="h-full flex flex-col justify-center items-center">
          <InboxLoading />
        </div>
      ) : (
        <div className="flex flex-col h-full relative">
          <InboxDetailHeader onBack={onBack} />
          <div
            className="flex-grow  w-full overflow-scroll my-4 "
            ref={scrollRef}
            onScroll={handleScroll}
          >
            <InboxChatList />
          </div>
          <InboxChatForm scrollToBottom={scrollToBottom} />
          {!isScrollBottom && (
            <div
              className="py-2 px-4 rounded bg-sticker-water absolute bottom-18 left-1/2 translate-x-[-50%] cursor-pointer"
              onClick={scrollToBottom}
            >
              <p className="text-primary font-bold">New Message</p>
            </div>
          )}
          {initialized && inbox && !inbox.isGroup && (
            <div className="absolute bottom-18 w-full px-8">
              <div className="py-4 px-4 rounded bg-sticker-water max-w-full flex gap-2 items-center">
                <LoadingIcon className="animate-spin size-8" fill="#2f80ed" />
                <p className="font-bold">
                  Please wait while we connect you with one of our team ...
                </p>
              </div>
            </div>
          )}
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
