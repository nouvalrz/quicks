import clsx from "clsx";

const BaseCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx("bg-white rounded overflow-clip", className)}>
      {children}
    </div>
  );
};

export default BaseCard;
