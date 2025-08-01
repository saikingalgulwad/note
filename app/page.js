"use client"
import { useState } from 'react'
import SimpleForm from './components/Form'
import Show from './components/Show'
import Link from 'next/link'

function page() {
 
  return (
    <div>
        <nav className="bg-blue-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <h1  className="text-2xl font-bold">Note</h1>
      <Link href='/Post' >
      <button  className="bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition">
        Add
      </button>
      </Link>
    </nav>
    <Show></Show>
    
    
    
    </div>
  )
}

export default page