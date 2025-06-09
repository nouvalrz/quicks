import clsx from "clsx";
import { CloseIcon, LeftArrowIcon } from "../Icons";
import { useInboxDetailStore } from "../../store/useInboxDetailStore";

const InboxDetailHeader = ({
  onBack,
  className,
}: {
  onBack: () => void;
  className?: string;
}) => {
  const { inbox, clearInbox } = useInboxDetailStore();

  const handleBack = () => {
    onBack();
    clearInbox();
  };

  return (
    <div
      className={clsx(
        "flex gap-4 px-8 py-6 border border-b-1 border-primary-gray-3 items-center w-full",
        className
      )}
    >
      <button className="cursor-pointer" onClick={handleBack}>
        <LeftArrowIcon fill="#333333" className="size-8" />
      </button>
      <div className="flex-grow">
        <p className="text-primary font-bold line-clamp-1">
          {inbox?.inboxTitle}
        </p>
        <p className="text-sm">{inbox?.participants} Participants</p>
      </div>
      <button className="cursor-pointer" onClick={handleBack}>
        <CloseIcon fill="#333333" className="size-4" />
      </button>
    </div>
  );
};

export default InboxDetailHeader;
