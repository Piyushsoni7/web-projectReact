import React from 'react'
import LeftContent from './leftcontent.jsx'
import RightContent from './rightcontent.jsx'

const page1content = (props) => {
  return (
<div className='pb-10 pt-6 lg:pt-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-10 min-h-[90vh] px-4 sm:px-6 lg:px-18'>      <LeftContent />
      <RightContent user={props.user}/>
    </div>
  )
}

export default page1content
