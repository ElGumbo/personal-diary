import React, { useState } from "react";
import EntryCard from "./EntryCard";
import EntryModal from "./EntryModal";

export default function EntryList({ entries }) {
  const [selectedEntry, setSelectedEntry] = useState(null);

  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(24rem,1fr))] gap-6 p-20'>
      {entries.map((entry) => (
        <EntryCard
          key={entry.date}
          entry={entry}
          onClick={() => setSelectedEntry(entry)}
        />
      ))}

      {selectedEntry && (
        <EntryModal
          entry={selectedEntry}
          onClose={() => setSelectedEntry(null)}
        />
      )}
    </div>
  );
}
