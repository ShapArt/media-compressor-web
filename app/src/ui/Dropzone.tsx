import { useCallback } from "react";
import { useQueueStore } from "../store/queue";

function Dropzone() {
  const addFiles = useQueueStore((s) => s.addFiles);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const files = Array.from(event.dataTransfer.files || []);
      addFiles(files);
    },
    [addFiles],
  );

  const onSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(event.target.files || []);
      addFiles(files);
    },
    [addFiles],
  );

  return (
    <div
      className="dropzone-box"
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
    >
      <p>Drop media files here or click to browse</p>
      <input type="file" multiple onChange={onSelect} />
    </div>
  );
}

export default Dropzone;
