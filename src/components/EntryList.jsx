import React, { useState } from "react";
import EntryCard from "./EntryCard";
import EntryModal from "./EntryModal";
import { dummyEntries } from "../data/dummyEntries";

export default function EntryList({ entries }) {
  const allEntries = entries?.length ? entries : dummyEntries;
  const [selectedEntry, setSelectedEntry] = useState(null);

  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(24rem,1fr))] gap-6 p-8 md:p-20 bg-gray-100 h-screen'>
      {allEntries.map((entry) => (
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
