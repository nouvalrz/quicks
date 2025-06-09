import clsx from "clsx";
import type { Chat } from "../../types/types";
import { pickRandomBySeed } from "../../lib/pickRandom";
import { formatTimeOnly } from "../../lib/formatDate";
import { HorizontalMoreIcon } from "../Icons";

const itemColors = [
  {
    text: "chat-orange-primary",
    bg: "chat-orange-secondary",
  },
  {
    text: "chat-green-primary",
    bg: "chat-green-secondary",
  },
];

const InboxChatItem = ({ chat }: { chat: Chat }) => {
  const color = pickRandomBySeed(itemColors, chat.senderName);

  return (
    <div
      className={clsx("flex flex-col", {
        "items-start": !chat.isSelf,
        "items-end": chat.isSelf,
      })}
    >
      <p
        className={clsx(
          chat.isSelf ? "text-chat-purple-primary" : `text-${color.text}`,
          "font-bold"
        )}
      >
        {chat.senderName}
      </p>
      <div className="flex gap-1 items-start">
        <button
          className={clsx({ "order-last": !chat.isSelf }, "cursor-pointer")}
        >
          <HorizontalMoreIcon className="size-6" />
        </button>
        <div
          className={clsx(
            "w-auto max-w-lg p-2 rounded-md",
            chat.isSelf ? "bg-chat-purple-secondary" : `bg-${color.bg}`
          )}
        >
          <p>{chat.message}</p>
          <p className="mt-2 text-sm">{formatTimeOnly(chat.date)}</p>
        </div>
      </div>
    </div>
  );
};

export default InboxChatItem;
