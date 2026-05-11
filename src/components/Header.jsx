import { useState } from "react";

export default function Header() {
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
            <h3 className="font-bold text-lg">Hello!</h3>
            <div className="modal-action">
              <button className="btn" onClick={() => setIsOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 