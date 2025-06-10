export type Inbox = {
  id: string;
  isGroup: boolean;
  inboxTitle: string;
  participants: number;
  date: string;
  chats: Chat[];
};

export type Chat = {
  id: string;
  isNew: boolean;
  isSelf: boolean;
  replyChatId: string | null;
  senderName: string;
  message: string;
  date: string;
  sendingStatus?: "loading" | "success" | "error";
};

export type TaskTag =
  | "Important ASAP"
  | "Offline Meeting"
  | "Virtual Meeting"
  | "ASAP"
  | "Client Related"
  | "Self Task"
  | "Appointments"
  | "Court Related";

export const tags: Record<TaskTag, string> = {
  "Important ASAP": "bg-sticker-water",
  ASAP: "bg-sticker-peach",
  Appointments: "bg-sticker-sand",
  "Client Related": "bg-sticker-mint",
  "Court Related": "bg-sticker-tea",
  "Offline Meeting": "bg-sticker-lilac",
  "Virtual Meeting": "bg-sticker-lavender",
  "Self Task": "bg-sticker-navy",
};

export type Task = {
  id: string;
  title: string;
  dueDate: string;
  description: string;
  completed: boolean;
  categoryName: "Personal Errands" | "Urgent To-Do" | "";
  tags: TaskTag[];
};
