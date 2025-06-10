import { useInboxDetailStore } from "../../store/useInboxDetailStore";
import type { Chat } from "../../types/types";

const InboxChatDropdownSelf = ({
  chat,
  onClose,
}: {
  chat: Chat;
  onClose: () => void;
}) => {
  const { setChatUpdate, deleteChat } = useInboxDetailStore();

  const handleEdit = () => {
    setChatUpdate(chat.id, chat.message);
    onClose();
  };

  const handleDelete = () => {
    deleteChat(chat.id);
    onClose();
  };
  return (
    <div className="flex flex-col rounded-md bg-white border border-primary-gray-2  min-w-32 items-stretch">
      <div onClick={handleEdit} className="flex justify-start cursor-pointer">
        <p className="text-primary pl-3 py-1">Edit</p>
      </div>
      <hr className="border-primary-gray-2 w-full" />
      <div className="flex justify-start cursor-pointer" onClick={handleDelete}>
        <p className="text-red-600  pl-3 py-1">Delete</p>
      </div>
    </div>
  );
};

export default InboxChatDropdownSelf;
