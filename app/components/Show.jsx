"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'


function Show() {
    const [dataSet, setdataSet] = useState([]);
    const router =useRouter();
    const getData = async () => {
        const data = await fetch("/api/createNode");
        const res = await data.json();
        setdataSet(res);
        
    }
    const Delete = async (id) => {
      let res=  await fetch(`api/createNode?id=${id}`, {
            method: "DELETE"
        });
        if(res.ok){
getData();
        }
       
       
      
    }

        useEffect(() => {
            getData();


        }, [])

        return (

            <div className="p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">Your Notes</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        dataSet?.map((d, i) => (
                            <div key={i} className="max-w-md mx-auto mt-6 p-4 bg-white rounded-lg shadow border border-gray-200">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{d.title}</h2>
                                <p className="text-gray-600 mb-4">
                                    {d.note}
                                </p>
                                <div className="flex gap-3">
                                    <Link href={`/noteRead/${d._id}`}>
                                        <button

                                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                                        >
                                            Read
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => Delete(d._id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        )
    
}
    export default Show