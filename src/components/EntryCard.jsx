import React from "react";

export default function EntryCard({ entry }) {
  return (
    <div className='card bg-base-100 w-96 h-96 shadow-sm'>
      <div className='card-body'>
        <h2 className='card-title'>{entry.title}</h2>
        <p>
          {entry.date}
        </p>
      </div>
      <figure>
        <img
        className="w-full h-full object-cover"
          src={entry.image}
          alt={entry.title + " image"}
        />
      </figure>
    </div>
  );
}
