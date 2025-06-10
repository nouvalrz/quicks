import { create } from "zustand";
import type { Chat, Inbox } from "../types/types";

type InboxDetailStore = {
  initialized: boolean;
  inbox: Inbox | null;
  initInbox: (inbox: Inbox) => void;
  sendChat: (chat: Chat) => Promise<void>;
  updateChat: (chatId: string, newMessage: string) => Promise<void>;
  deleteChat: (chatId: string) => Promise<void>;
  clearInbox: () => void;
  clearChatUpdate: () => void;
  inputMessageValue: string;
  chatUpdateId: string | null;
  setChatUpdate: (id: string, message: string) => void;
  setInputMessageValue: (value: string) => void;
};

export const useInboxDetailStore = create<InboxDetailStore>((set, get) => {
  return {
    initialized: false,
    inbox: null,
    initInbox: (inbox: Inbox) => {
      set({ initialized: false });
      set({ inbox: inbox, initialized: true });
    },
    inputMessageValue: "",
    setInputMessageValue: (value) => set({ inputMessageValue: value }),
    chatUpdateId: null,
    setChatUpdate: (id, message) => {
      set({ chatUpdateId: id, inputMessageValue: message });
    },
    clearChatUpdate: () => {
      set({ chatUpdateId: null, inputMessageValue: "" });
    },
    sendChat: async (newChat: Chat) => {
      const inbox = get().inbox;

      if (!inbox) {
        return;
      }

      set((state) => {
        if (!state.inbox) return {};

        return {
          inbox: {
            ...state.inbox,
            chats: [...state.inbox.chats, newChat],
          },
        };
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { sendingStatus, ...chatWithouStatus } = newChat;

      const newChats = [
        ...inbox.chats.map((chat) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { sendingStatus, ...chatNoStatus } = chat;
          return chatNoStatus;
        }),
        chatWithouStatus,
      ];

      try {
        await fetch(`/api/inbox/${inbox.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ chats: newChats }),
        });

        set((state) => {
          if (!state.inbox) return {};

          return {
            inbox: {
              ...state.inbox,
              chats: state.inbox.chats.map((chat) => {
                if (chat.id === newChat.id) {
                  return { ...chat, sendingStatus: "success" };
                }
                return chat;
              }),
            },
          };
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        set((state) => {
          if (!state.inbox) return {};

          return {
            inbox: {
              ...state.inbox,
              chats: state.inbox.chats.map((chat) => {
                if (chat.id === newChat.id) {
                  return { ...chat, sendingStatus: "error" };
                }
                return chat;
              }),
            },
          };
        });
      }
    },
    updateChat: async (chatId, newMessage) => {
      const inbox = get().inbox;

      if (!inbox) {
        return;
      }

      set((state) => {
        if (!state.inbox) return {};

        return {
          inbox: {
            ...state.inbox,
            chats: state.inbox.chats.map((chat) =>
              chat.id === chatId
                ? { ...chat, sendingStatus: "loading", message: newMessage }
                : chat
            ),
          },
        };
      });

      const newChats = [
        ...inbox.chats.map((chat) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { sendingStatus, ...chatNoStatus } = chat;
          if (chat.id === chatId) {
            return { ...chatNoStatus, message: newMessage };
          }
          return chatNoStatus;
        }),
      ];

      try {
        await fetch(`/api/inbox/${inbox.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ chats: newChats }),
        });

        set((state) => {
          if (!state.inbox) return {};

          return {
            inbox: {
              ...state.inbox,
              chats: state.inbox.chats.map((chat) => {
                if (chat.id === chatId) {
                  return { ...chat, sendingStatus: "success" };
                }
                return chat;
              }),
            },
          };
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        set((state) => {
          if (!state.inbox) return {};

          return {
            inbox: {
              ...state.inbox,
              chats: state.inbox.chats.map((chat) => {
                if (chat.id === chatId) {
                  return { ...chat, sendingStatus: "error" };
                }
                return chat;
              }),
            },
          };
        });
      }
    },
    deleteChat: async (chatId) => {
      const inbox = get().inbox;

      if (!inbox) {
        return;
      }

      set((state) => {
        if (!state.inbox) return {};

        return {
          inbox: {
            ...state.inbox,
            chats: state.inbox.chats.map((chat) =>
              chat.id === chatId ? { ...chat, sendingStatus: "loading" } : chat
            ),
          },
        };
      });

      const newChats = inbox.chats.filter((chat) => chat.id !== chatId);

      try {
        await fetch(`/api/inbox/${inbox.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ chats: newChats }),
        });

        set((state) => {
          if (!state.inbox) return {};

          return {
            inbox: {
              ...state.inbox,
              chats: state.inbox.chats.filter((chat) => chat.id !== chatId),
            },
          };
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        set((state) => {
          if (!state.inbox) return {};

          return {
            inbox: {
              ...state.inbox,
              chats: state.inbox.chats.map((chat) => {
                if (chat.id === chatId) {
                  return { ...chat, sendingStatus: "error" };
                }
                return chat;
              }),
            },
          };
        });
      }
    },
    clearInbox: () => {
      set({ inbox: null, initialized: false });
    },
  };
});
