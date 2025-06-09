import { LoadingIcon } from "../Icons";

const InboxLoading = () => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <LoadingIcon className="animate-spin size-16" />
      <p className="font-medium">Loading Chats ...</p>
    </div>
  );
};

export default InboxLoading;
