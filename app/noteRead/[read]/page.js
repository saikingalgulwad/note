import Read from '@/app/components/Read';
import React from 'react'

async function page({params}) {
  const {read} = await params;
  

  return (
    <div>
      <Read id={read}/>
    </div>
  )
}

export default page