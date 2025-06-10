import clsx from "clsx";
import { formatDateOnly } from "../../lib/formatDate";
import { useInboxDetailStore } from "../../store/useInboxDetailStore";
import type { Chat } from "../../types/types";
import InboxChatItem from "./InboxChatItem";

const InboxChatList = () => {
  const { inbox } = useInboxDetailStore();

  const groupedChatsbyDate: { [key: string]: Chat[] } = {};

  inbox!.chats.forEach((chat) => {
    if (chat.isNew) {
      if (groupedChatsbyDate["new"]) {
        groupedChatsbyDate["new"] = [...groupedChatsbyDate["new"], chat];
      } else {
        groupedChatsbyDate["new"] = [chat];
      }
      return;
    }
    const dateOnly = chat.date.split("T")[0];
    if (groupedChatsbyDate[dateOnly]) {
      groupedChatsbyDate[dateOnly] = [...groupedChatsbyDate[dateOnly], chat];
    } else {
      groupedChatsbyDate[dateOnly] = [chat];
    }
  });

  return (
    <div className="h-full  flex flex-col px-8 ">
      <div className="flex flex-col gap-6  flex-grow pb-24">
        {Object.entries(groupedChatsbyDate).map(([groupLabel, chatList]) => {
          return (
            <div key={groupLabel}>
              <div className="flex gap-3 items-center">
                <hr
                  className={clsx("flex-grow ", {
                    "border-primary-gray-1": groupLabel !== "new",
                    "border-indicator-red": groupLabel === "new",
                  })}
                />
                <p
                  className={clsx("font-bold", {
                    "text-indicator-red": groupLabel === "new",
                  })}
                >
                  {groupLabel === "new"
                    ? "New Message"
                    : formatDateOnly(groupLabel)}
                </p>
                <hr
                  className={clsx("flex-grow ", {
                    "border-primary-gray-1": groupLabel !== "new",
                    "border-indicator-red": groupLabel === "new",
                  })}
                />
              </div>
              <div className="flex flex-col gap-1">
                {chatList.map((chat) => (
                  <InboxChatItem chat={chat} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InboxChatList;
