import { nanoid } from "nanoid";
import { create } from "zustand";

export type QueueItem = {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
};

type QueueState = {
  items: QueueItem[];
  addFiles: (files: File[]) => void;
  remove: (id: string) => void;
  clear: () => void;
};

export const useQueueStore = create<QueueState>((set) => ({
  items: [],
  addFiles: (files) =>
    set((state) => ({
      items: [
        ...state.items,
        ...files.map((file) => ({
          id: nanoid(),
          file,
          name: file.name,
          size: file.size,
          type: file.type,
        })),
      ],
    })),
  remove: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),
  clear: () => set({ items: [] }),
}));
