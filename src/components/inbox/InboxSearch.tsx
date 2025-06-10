import { SearchIcon } from "../Icons";

interface InboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch: (value: string) => void;
}

const InboxSearch = (props: InboxProps) => {
  return (
    <div
      className={`
        flex items-center gap-2 px-14 py-1 rounded-md border
        border-primary-gray-2
        focus-within:ring-2 focus-within:ring-primary
        focus-within:border-primary transition
      `}
    >
      <input
        className="flex-1 outline-none bg-transparent"
        placeholder="Search"
        {...props}
        onChange={(e) => props.onSearch(e.target.value)}
      />
      <SearchIcon className="size-5" fill="gray" />
    </div>
  );
};

export default InboxSearch;
