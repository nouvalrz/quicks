import InboxSearch from "./InboxSearch";
import useSWR from "swr";
import type { Inbox } from "../../types/types";
import { fetcher } from "../../lib/fetcher";
import InboxLoading from "./InboxLoading";
import InboxItem from "./InboxItem";
import { useState } from "react";

const InboxList = ({
  onItemClick,
}: {
  onItemClick: (value: string) => void;
}) => {
  const { data, isLoading, error } = useSWR<Inbox[]>("/api/inbox", fetcher);
  const [searchValue, setSearchValue] = useState<string>("");

  const filteredInbox = data?.filter((inbox) =>
    inbox.inboxTitle.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className=" py-6 px-8 h-full">
      <InboxSearch onSearch={setSearchValue} />
      {isLoading ? (
        <div className="h-full flex flex-col items-center justify-center">
          <InboxLoading />
        </div>
      ) : (
        <div className="flex flex-col">
          {filteredInbox &&
            filteredInbox.map((inbox, index) => (
              <div key={index}>
                <InboxItem
                  inbox={inbox}
                  onClick={() => onItemClick(inbox.id)}
                />
                {index !== filteredInbox.length - 1 && (
                  <hr className="border-primary-gray-2" />
                )}
              </div>
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
