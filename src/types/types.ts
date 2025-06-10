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
  replyChatId: number | null;
  senderName: string;
  message: string;
  date: string;
  sendingStatus?: "loading" | "success" | "error";
};
