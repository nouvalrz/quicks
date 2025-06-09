export type Inbox = {
  id: string;
  isGroup: boolean;
  inboxTitle: string;
  participants: number;
  date: string;
  chats: Chat[];
};

export type Chat = {
  id: number;
  isNew: boolean;
  isSelf: boolean;
  replyChatId: number | null;
  senderName: string;
  message: string;
  date: string;
};
