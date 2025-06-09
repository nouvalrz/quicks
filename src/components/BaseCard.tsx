import clsx from "clsx";

const BaseCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx("bg-white rounded py-6 px-8", className)}>
      {children}
    </div>
  );
};

export default BaseCard;
