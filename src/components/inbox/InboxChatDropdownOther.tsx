const InboxChatDropdownOther = ({ onReply }: { onReply: () => void }) => {
  return (
    <div className="flex flex-col rounded-md bg-white border border-primary-gray-2  min-w-32 items-stretch">
      <div className="flex justify-start cursor-pointer">
        <p className="text-primary pl-3 py-1">Share</p>
      </div>
      <hr className="border-primary-gray-2 w-full" />
      <div className="flex justify-start cursor-pointer" onClick={onReply}>
        <p className="text-primary  pl-3 py-1">Reply</p>
      </div>
    </div>
  );
};

export default InboxChatDropdownOther;
