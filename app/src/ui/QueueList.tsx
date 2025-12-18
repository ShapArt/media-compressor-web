import { useQueueStore } from "../store/queue";
import { humanSize } from "../utils/size";

function QueueList() {
  const { items, remove } = useQueueStore();
  if (!items.length) {
    return <p>No files queued yet.</p>;
  }
  return (
    <ul className="queue-list">
      {items.map((item) => (
        <li key={item.id} className="queue-item">
          <div>
            <strong>{item.name}</strong>
            <div className="meta">
              {humanSize(item.size)} · {item.type || "unknown"}
            </div>
          </div>
          <button type="button" onClick={() => remove(item.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default QueueList;
