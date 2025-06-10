import { formatFullDateTime } from "../../lib/formatDate";
import type { Inbox } from "../../types/types";
import { InboxItemIcon } from "../Icons";

const InboxItem = ({
  inbox,
  onClick,
}: {
  inbox: Inbox;
  onClick: () => void;
}) => {
  return (
    <div
      className="my-[22px] flex gap-4 items-start cursor-pointer relative"
      onClick={onClick}
    >
      {inbox.chats[inbox.chats.length - 1].isNew && (
        <span className="w-2 h-2 bg-indicator-red rounded-full absolute right-0 top-1/2 -translate-y-1/2"></span>
      )}
      <InboxItemIcon className="flex-shrink-0" />
      <div>
        <div className="flex gap-3 items-start">
          <p className="font-bold text-primary text-base">{inbox.inboxTitle}</p>
          <p className="text-sm font-normal flex-shrink-0">
            {formatFullDateTime(inbox.date)}
          </p>
        </div>

        <div className="text-sm">
          <p className="font-semibold">
            {inbox.chats[inbox.chats.length - 1].senderName} :{" "}
          </p>
          <p>{inbox.chats[inbox.chats.length - 1].message}</p>
        </div>
      </div>
    </div>
  );
};

export default InboxItem;
