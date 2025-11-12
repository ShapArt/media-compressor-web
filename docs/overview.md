# Docs — media-compressor-web
Client-side processing diagram.
## Flow
```mermaid
flowchart LR
  UI[UI] -->|transcode| ffmpeg.wasm[ffmpeg.wasm]
  UI[UI] -->|read/write| FS[FS]
```
