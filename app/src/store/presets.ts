import { create } from "zustand";

export type Preset = {
  name: string;
  container: string;
  video_codec: string;
  audio_codec: string;
  crf?: number;
  max_bitrate_kbps?: number;
  audio_bitrate_kbps?: number;
  resolution?: string;
};

type PresetState = {
  presets: Preset[];
  selected: string | null;
  loadPresets: () => Promise<void>;
  select: (name: string) => void;
};

export const usePresetStore = create<PresetState>((set) => ({
  presets: [],
  selected: null,
  loadPresets: async () => {
    try {
      const resp = await fetch("/presets/default.json");
      if (!resp.ok) return;
      const data = await resp.json();
      set({ presets: data.presets || [] });
    } catch {
      // ignore
    }
  },
  select: (name) => set({ selected: name || null }),
}));
