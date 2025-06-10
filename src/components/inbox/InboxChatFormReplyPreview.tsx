import { useInboxDetailStore } from "../../store/useInboxDetailStore";
import type { Chat } from "../../types/types";
import { CloseIcon } from "../Icons";

const InboxChatFormReplyPreview = ({ replyChat }: { replyChat: Chat }) => {
  const { clearReplyChat } = useInboxDetailStore();

  const handleClose = () => {
    clearReplyChat();
    console.log("HIT CLOSE REPLY");
  };

  return (
    <div className="flex gap-3 bg-primary-gray-3 px-3 py-2 border border-primary-gray-1 w-full justify-between h-[100px] overflow-y-scroll rounded-t-md items-start">
      <div>
        <p className="font-bold">Replying to {replyChat.senderName}</p>
        <p>{replyChat.message}</p>
      </div>
      <span onClick={handleClose} className="cursor-pointer">
        <CloseIcon className="size-4 h-auto" fill="#4f4f4f" />
      </span>
    </div>
  );
};

export default InboxChatFormReplyPreview;
