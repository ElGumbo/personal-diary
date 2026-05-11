import React from "react";
import { useState } from "react";

export default function EntryForm() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    image: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.date ||
      !formData.image ||
      !formData.content
    ) {
      setError("All fields are required.");
      return;
    }

    const diaryEntries = JSON.parse(
      localStorage.getItem("diaryEntries") || "[]",
    );
    const dateExists = diaryEntries.find(
      (entry) => entry.date === formData.date,
    );
    if (dateExists) {
      setError("Entry for that date already exists!");
      return;
    }
    setError("");
    diaryEntries.push(formData);
    localStorage.setItem("diaryEntries", JSON.stringify(diaryEntries));
  };

  return (
    <div className='text-2xl'>
      <form onSubmit={handleSubmit}>
        <fieldset className='text-xl fieldset bg-base-200 border-base-300 rounded-box w-full border p-4'>
          <legend className='fieldset-legend'>Page details</legend>
          <label className='label'>Title</label>
          <input
            type='text'
            name='title'
            className='input w-full'
            placeholder='My awesome page'
            onChange={handleChange}
          />
          <label className='label'>Date</label>
          <input
            type='date'
            name='date'
            className='input w-full'
            onChange={handleChange}
          />
          <label className='label'>Image</label>
          <input
            type='text'
            name='image'
            className='input w-full'
            placeholder='Image URL'
            onChange={handleChange}
          />
          <label className='label'>Content</label>
          <textarea
            name='content'
            className='input w-full h-32'
            placeholder='Type here ...'
            onChange={handleChange}
          ></textarea>
          <button type='submit' className='btn bg-white mt-4'>
            Create Entry
          </button>
          {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
        </fieldset>
      </form>
    </div>
  );
}
