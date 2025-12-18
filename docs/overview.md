# Media Compressor — overview

```mermaid
flowchart LR
  UI[React UI] -->|enqueue| Queue
  Queue -->|command| Tauri[Rust commands]
  Tauri -->|ffprobe/ffmpeg| FFmpeg
  Tauri -->|read presets| Presets[YAML]
  FFmpeg -->|output| Files[Output dir]
```

Components:

- React/Vite UI: drag-and-drop, presets, size estimator.
- Tauri commands: probe media, transcode with selected preset, manage HW accel flags.
- Presets: YAML with codec/container/bitrate/CRF targets.
