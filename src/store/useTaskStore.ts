import { create } from "zustand";
import type { Task } from "../types/types";
import { v4 as uuidv4 } from "uuid";

type TaskStore = {
  initialized: boolean;
  tasks: Task[];
  initTasks: (tasks: Task[]) => void;
  updateDescription: (taskId: string, description: string) => Promise<void>;
  updateCompleted: (taskId: string, completed: boolean) => Promise<void>;
  updateDueDate: (taskId: string, dueDate: string) => Promise<void>;
  submitTask: (task: Task) => Promise<void>;
  deleteTask: (taskId: string) => Promise<void>;
};

export const useTaskStore = create<TaskStore>((set, get) => {
  return {
    initialized: false,
    tasks: [],
    initTasks: (tasks) => {
      set({ tasks: tasks, initialized: true });
    },
    submitTask: async (task) => {
      const id = uuidv4();
      const taskData = { ...task, id: id };

      set((state) => {
        return {
          tasks: [...state.tasks, taskData],
        };
      });

      try {
        await fetch("/api/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(taskData),
        });
      } catch (error) {
        set((state) => {
          return {
            tasks: state.tasks.filter((task) => task.id !== taskData.id),
          };
        });
      }
    },
    deleteTask: async (taskId) => {
      const oldTask = get().tasks;
      set((state) => {
        return {
          tasks: state.tasks.filter((task) => task.id !== taskId),
        };
      });

      try {
        await fetch(`/api/tasks/${taskId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        set({ tasks: [...oldTask] });
      }
    },
    updateDescription: async (taskId, description) => {
      const oldTask = get().tasks;
      set((state) => {
        return {
          tasks: state.tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, description: description };
            }
            return task;
          }),
        };
      });

      try {
        await fetch(`/api/tasks/${taskId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ description: description }),
        });
      } catch (error) {
        set({ tasks: [...oldTask] });
      }
    },
    updateCompleted: async (taskId, completed) => {
      const oldTask = get().tasks;
      set((state) => {
        return {
          tasks: state.tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, completed: completed };
            }
            return task;
          }),
        };
      });

      try {
        await fetch(`/api/tasks/${taskId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ completed: completed }),
        });
      } catch (error) {
        set({ tasks: [...oldTask] });
      }
    },

    updateDueDate: async (taskId, dueDate) => {
      const oldTask = get().tasks;
      set((state) => {
        return {
          tasks: state.tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, dueDate: dueDate };
            }
            return task;
          }),
        };
      });

      try {
        await fetch(`/api/tasks/${taskId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ dueDate: dueDate }),
        });
      } catch (error) {
        set({ tasks: [...oldTask] });
      }
    },
  };
});
