import React from "react";
import EntryCard from "./EntryCard";

export default function EntryList({ entries }) {
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(24rem,1fr))] gap-6 p-20'>
      {entries.map((entry) => (
        <EntryCard key={entry.date} entry={entry} />
      ))}
    </div>
  );
}
