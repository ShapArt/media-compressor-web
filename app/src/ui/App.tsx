import { useMemo } from "react";
import { useQueueStore } from "../store/queue";
import Dropzone from "./Dropzone";
import QueueList from "./QueueList";
import PresetSelect from "./PresetSelect";
import "../styles.css";

function App() {
  const { items } = useQueueStore();
  const total = useMemo(() => items.length, [items]);
  return (
    <div className="app-shell">
      <header>
        <h1>Media Compressor</h1>
        <p>Drag files, pick preset, compress offline via FFmpeg.</p>
      </header>
      <section className="controls">
        <PresetSelect />
      </section>
      <section className="dropzone">
        <Dropzone />
      </section>
      <section className="queue">
        <div className="queue-head">
          <h2>Queue ({total})</h2>
        </div>
        <QueueList />
      </section>
    </div>
  );
}

export default App;
