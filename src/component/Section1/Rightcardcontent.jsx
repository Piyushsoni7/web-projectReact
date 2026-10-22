import React from 'react'
import {ArrowUpRight} from 'lucide-react'

const Rightcardcontent = (props) => {
  return (
  <div className='h-full w-full absolute top-0 left-0  p-8 flex flex-col justify-between'>
        <h2 className=' text-xl h-12 w-12 flex bg-white rounded-full justify-center items-center'>{props.id+1}</h2>
        <div >
          <p className='text-lg leading-relexed mb-14 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eaque culpa cumque porro beatae fugit?</p>
          <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
            <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><ArrowUpRight size={25} strokeWidth={.5} /></button>
          </div>
        </div>
       </div>
  )
}

export default Rightcardcontent
