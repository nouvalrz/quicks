import { create } from "zustand";
import type { Task, TaskTag } from "../types/types";
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
  toggleTag: (taskId: string, newTag: TaskTag) => Promise<void>;
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        set({ tasks: [...oldTask] });
      }
    },
    toggleTag: async (taskId, newTag) => {
      const oldTask = get().tasks;
      set((state) => {
        return {
          tasks: state.tasks.map((task) => {
            if (task.id === taskId) {
              const hasSameTag = task.tags.some((tag) => tag === newTag);
              const newTags = hasSameTag
                ? task.tags.filter((tag) => tag !== newTag)
                : [...task.tags, newTag];
              return { ...task, tags: newTags };
            }
            return task;
          }),
        };
      });

      const oldTags = oldTask.find((task) => task.id === taskId)!.tags;
      const hasSameTag = oldTags.some((tag) => tag === newTag);
      const newTags = hasSameTag
        ? oldTags.filter((tag) => tag !== newTag)
        : [...oldTags, newTag];

      try {
        await fetch(`/api/tasks/${taskId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tags: newTags }),
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        set({ tasks: [...oldTask] });
      }
    },
  };
});
