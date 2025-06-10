import clsx from "clsx";
import type { Chat } from "../../types/types";
import { pickRandomBySeed } from "../../lib/pickRandom";
import { formatTimeOnly } from "../../lib/formatDate";
import { HorizontalMoreIcon, LoadingIcon } from "../Icons";
import { useEffect, useRef, useState } from "react";
import InboxChatDropdownSelf from "./InboxChatDropdownSelf";

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
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Tutup dropdown saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

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
        {(chat.sendingStatus === undefined ||
          chat.sendingStatus === "success") && (
          <button
            className={clsx(
              { "order-last": !chat.isSelf },
              "cursor-pointer relative"
            )}
            onClick={() => setDropdownOpen(true)}
          >
            <HorizontalMoreIcon className="size-6" />
            {dropdownOpen && chat.isSelf && (
              <div
                ref={dropdownRef}
                className="absolute -bottom-18 left-1/2 translate-x-[-50%] "
              >
                <InboxChatDropdownSelf chat={chat} onClose={() => {}} />
              </div>
            )}
          </button>
        )}
        {chat.sendingStatus === "loading" && (
          <LoadingIcon className="size-5 animate-spin" />
        )}
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
