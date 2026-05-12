import React, { useState } from "react";

export default function EntryCard({ entry, onClick }) {

  return (
    <div
      className='card bg-base-100 w-96 h-96 shadow-sm cursor-pointer transition-all duration-150 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]'
      onClick={onClick}
    >
      <div className='card-body'>
        <h2 className='card-title'>{entry.title}</h2>
        <p>{entry.date}</p>
      </div>
      <figure>
        <img
          className='w-full h-full object-cover'
          src={entry.image}
          alt={entry.title + " image"}
        />
      </figure>
    </div>
  );
}
