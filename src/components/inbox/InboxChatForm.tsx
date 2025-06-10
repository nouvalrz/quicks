import React from "react";
import type { Chat } from "../../types/types";
import { v4 as uuidv4 } from "uuid";
import { useInboxDetailStore } from "../../store/useInboxDetailStore";
import InboxChatFormReplyPreview from "./InboxChatFormReplyPreview";
import clsx from "clsx";

const InboxChatForm = ({ scrollToBottom }: { scrollToBottom: () => void }) => {
  const {
    sendChat,
    inputMessageValue,
    setInputMessageValue,
    chatUpdateId,
    clearChatUpdate,
    updateChat,
    replyChat,
    clearReplyChat,
  } = useInboxDetailStore();

  const handleSend = () => {
    if (!inputMessageValue.trim()) {
      return;
    }

    const now = new Date();

    const chat: Chat = {
      id: uuidv4(),
      date: now.toISOString().slice(0, 19),
      isNew: false,
      isSelf: true,
      senderName: "You",
      message: inputMessageValue,
      replyChatId: replyChat ? replyChat.id : null,
      sendingStatus: "loading",
    };

    sendChat(chat);
    clearReplyChat();
    setTimeout(() => {
      scrollToBottom();
    }, 30);

    setInputMessageValue("");
  };

  const handleUpdate = async () => {
    await updateChat(chatUpdateId!, inputMessageValue);
    clearChatUpdate();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (chatUpdateId) {
      handleUpdate();
    } else {
      handleSend();
    }
  };

  return (
    <div className="px-8 pb-6 relative">
      <form className=" flex items-stretch gap-3" onSubmit={handleSubmit}>
        <div className="relative flex-grow">
          <input
            className={clsx(
              " py-1 px-4 rounded border border-primary-gray-1 w-full focus:outline-none focus:ring-0 h-full",
              { "!rounded-tl-none !rounded-tr-none": replyChat }
            )}
            placeholder="Type a new message"
            name="message"
            value={inputMessageValue}
            onChange={(e) => setInputMessageValue(e.target.value)}
          />
          {replyChat && (
            <div className="absolute -top-24 left-0 w-full z-30">
              {" "}
              <InboxChatFormReplyPreview replyChat={replyChat} />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-primary text-white font-bold px-6 py-2 rounded cursor-pointer"
        >
          {chatUpdateId ? "Edit" : "Send"}
        </button>
        {chatUpdateId && (
          <button
            className="bg-primary-gray-1 text-white font-bold px-6 py-2 rounded cursor-pointer"
            onClick={() => clearChatUpdate()}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default InboxChatForm;
