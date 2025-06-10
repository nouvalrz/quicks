export const formatFullDateTime = (value: string): string => {
  const date = new Date(value);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

export const formatDateOnly = (value: string): string => {
  const date = new Date(value);

  const formatted = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);

  return formatted;
};

export const formatTimeOnly = (value: string): string => {
  const isoString = value;
  const date = new Date(isoString);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const timeFormatted = `${hours}:${minutes}`;

  return timeFormatted;
};

export const formatDateOnlyWithSlash = (value: string): string => {
  const [year, month, day] = value.split("-");
  const formatted = `${day}/${month}/${year}`;

  return formatted;
};

export const formatDaysLeft = (value: string): string | null => {
  const today = new Date();
  const dueDate = new Date(value);

  today.setHours(0, 0, 0, 0);
  dueDate.setHours(0, 0, 0, 0);

  const diffTime = dueDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays >= 0 && diffDays <= 7) {
    return `${diffDays} Day${diffDays !== 1 ? "s" : ""} Left`;
  } else {
    return null;
  }
};
