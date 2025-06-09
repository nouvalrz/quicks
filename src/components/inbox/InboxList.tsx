import InboxSearch from "./InboxSearch";
import useSWR from "swr";
import type { Inbox } from "../../types/types";
import { fetcher } from "../../lib/fetcher";
import InboxLoading from "./InboxLoading";
import InboxItem from "./InboxItem";

const InboxList = ({
  onItemClick,
}: {
  onItemClick: (value: number) => void;
}) => {
  const { data, isLoading, error } = useSWR<Inbox[]>("/api/inbox", fetcher);

  return (
    <div className=" py-6 px-8 h-full">
      <InboxSearch />
      {isLoading ? (
        <div className="h-full flex flex-col items-center justify-center">
          <InboxLoading />
        </div>
      ) : (
        <div className="flex flex-col">
          {data &&
            data.map((inbox, index) => (
              <>
                <InboxItem
                  inbox={inbox}
                  onClick={() => onItemClick(inbox.id)}
                />
                {index !== data.length - 1 && (
                  <hr className="border-primary-gray-2" />
                )}
              </>
            ))}
        </div>
      )}
      {!isLoading && error && (
        <div className="h-full flex flex-col items-center justify-center">
          <p>Sorry, something went wrong!</p>
          <p>Error : {error}</p>
        </div>
      )}
    </div>
  );
};

export default InboxList;
