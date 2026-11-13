import React from 'react'

const Navbar = () => {
  return (
<div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 py-5 sm:py-8 px-4 sm:px-6 lg:px-18'>      
      <h4 className='bg-black text-white px-6 py-2 uppercase rounded-full'>Target Audience</h4>
      <button className='bg-gray-200 px-4 sm:px-6 py-2 uppercase rounded-full tracking-widest text-xs sm:text-sm'>digitak Banking Platform</button>
    </div>
  )
}

export default Navbar
