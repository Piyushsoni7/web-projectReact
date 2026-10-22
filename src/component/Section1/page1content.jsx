import React from 'react'
import LeftContent from './leftcontent.jsx'
import RightContent from './rightcontent.jsx'

const page1content = (props) => {
  return (
    <div className='pb-16 pt-10 flex item-center  gap-10 h-[90vh] px-18'>
      <LeftContent />
      <RightContent user={props.user}/>
    </div>
  )
}

export default page1content
