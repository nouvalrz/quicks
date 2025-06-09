import { create } from "zustand";
import type { Chat, Inbox } from "../types/types";

type InboxDetailStore = {
  initialized: boolean;
  inbox: Inbox | null;
  initInbox: (inbox: Inbox) => void;
  sendChat: (chat: Chat) => Promise<void>;
  clearInbox: () => void;
};

export const useInboxDetailStore = create<InboxDetailStore>((set, get) => {
  return {
    initialized: false,
    inbox: null,
    initInbox: (inbox: Inbox) => {
      set({ inbox: inbox, initialized: true });
    },
    sendChat: async (chat: Chat) => {},
    clearInbox: () => {
      set({ inbox: null, initialized: false });
    },
  };
});
