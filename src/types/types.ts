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

export type Task = {
  id: string;
  title: string;
  dueDate: string;
  description: string;
  completed: boolean;
  categoryName: "Personal Errands" | "Urgent To-Do" | "";
};
