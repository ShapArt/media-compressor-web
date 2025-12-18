import { useEffect } from "react";
import { usePresetStore } from "../store/presets";

function PresetSelect() {
  const { presets, selected, loadPresets, select } = usePresetStore();

  useEffect(() => {
    void loadPresets();
  }, [loadPresets]);

  return (
    <label className="preset-select">
      Preset:
      <select value={selected || ""} onChange={(e) => select(e.target.value)}>
        <option value="">Auto</option>
        {presets.map((p) => (
          <option key={p.name} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default PresetSelect;
