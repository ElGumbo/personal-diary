import React from "react";

export default function EntryModal({ entry, onClose }) {
  return (
    <div
      className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'
      onClick={onClose}
    >
      <div
        className='bg-base-100 rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden'
        onClick={(e) => e.stopPropagation()}
      >
        <figure className='h-64 shrink-0'>
          <img
            className='w-full h-full object-cover'
            src={entry.image}
            alt={entry.title + " image"}
          />
        </figure>
        <div className='flex flex-col overflow-y-auto p-6 gap-2'>
          <h2 className='text-xl font-bold'>{entry.title}</h2>
          <p className='text-sm text-gray-500'>{entry.date}</p>
          <div className='mt-2'>{entry.content}</div>
        </div>
        <div className='p-4 shrink-0 border-t border-base-200'>
          <button className='btn w-full' onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
