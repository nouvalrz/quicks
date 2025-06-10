import { SearchIcon } from "../Icons";

interface InboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch: (value: string) => void;
}

const InboxSearch = (props: InboxProps) => {
  const { onSearch, ...rest } = props;
  return (
    <div
      className={`
        flex items-center gap-2 px-14 py-1 rounded-md border
        border-primary-gray-2s
        focus-within:ring-2 focus-within:ring-primary
        focus-within:border-primary transition
      `}
    >
      <input
        className="flex-1 outline-none bg-transparent"
        placeholder="Search"
        {...rest}
        onChange={(e) => onSearch(e.target.value)}
      />
      <SearchIcon className="size-5" fill="gray" />
    </div>
  );
};

export default InboxSearch;
