# Presets

YAML profiles for common targets. Example fields:
```yaml
name: telegram-h264
container: mp4
video_codec: h264
audio_codec: aac
crf: 23
max_bitrate_kbps: 2500
audio_bitrate_kbps: 128
resolution: 1280x720
faststart: true
copy_metadata: true
```
Add more profiles: instagram-story, youtube, email-low, archive-lossy, archive-lossless.
