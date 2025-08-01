"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react'


function Read({id}) {
   
    const [dataSet, setdataSet] = useState({
        title:"",
        note:""
    });
    const router =useRouter();
    const getData = async (uid) => {
        const data = await fetch(`https://note-three-sigma.vercel.app/api/createNode?search=${uid}`);
        const res = await data.json();
      
       setdataSet(res);
        
        
        
    }
    const Delete = async (name) => {
      let res=  await fetch(`https://note-three-sigma.vercel.app/api/createNode?id=${name}`, {
            method: "DELETE"
        });
        if(res.ok){
router.push('/');
        }
       
       
       
      
    }


        useEffect(() => {
        
getData(id);
        }, []);
       

        return (
<>
    <div>
            <nav className="bg-blue-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
                <Link href='/'>
      <h1  className="text-2xl font-bold">Note</h1></Link>
      <Link href='/Post' >
      <button  className="bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition">
        Add
      </button>
      </Link>
    </nav>
{


   
      <div  className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4">
      <div className="max-w-xl w-full bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-10 text-center border border-gray-200 dark:border-gray-700">
       <Suspense fallback={<div className="text-center mt-20 text-gray-500">Loading note...</div>}>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {dataSet.title}
        </h1>
    
        <pre className="text-lg text-gray-600 dark:text-gray-300 mb-5">
        {dataSet.note}
        </pre>

         <button
                                        onClick={() => Delete(dataSet._id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
        </Suspense>
      
   
        
                                    </div>
                                     </div>
                                    
  

}
 </div>
       
</>
        )
    
}
    export default Read
