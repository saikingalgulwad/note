'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SimpleForm() {
  const [form, setForm] = useState({
    title: '',
    note: '',
  });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
      const res =await fetch ("https://note-three-sigma.vercel.app/api/createNode",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify(form),
    });
    if(res.ok){
       router.replace('/');
    }
    setForm({ title: '', note: '' });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Submit Info</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="title">
            Title
          </label>
          <input
         
            type="text"
            name="title"
            id="title"
            value={form.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            placeholder="Enter title"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="note">
            Description
          </label>
          <textarea
            name="note"
            id="note"
            value={form.note}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            placeholder="Enter note"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
