import { useState } from "react";
import EntryForm from "./EntryForm";

export default function Header({ onAddEntry  }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-end">
        <button className="btn" onClick={() => setIsOpen(true)}>
          Add entry
        </button>
      </div>

      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <EntryForm onAddEntry={onAddEntry} />
            <div className="modal-action">
              <button className="btn" onClick={() => setIsOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 