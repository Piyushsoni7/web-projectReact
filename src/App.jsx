import React from 'react'
import Section1 from './component/Section1/Section1.jsx'
import Section2 from './component/Section2/Section2.jsx'

const App = () => {
    const user=[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      tag:' Satisfied'
    },
    {
       img:'https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      tag:'UnderServed'
    },
    {
       img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      tag:'UnderBanked'
    },
     {
       img:'https://plus.unsplash.com/premium_photo-1661598004055-33c8874db9d5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      tag:'UnderWorked'
    }
      
    ]
  return (
  
    <div>
      <Section1 user={user}/>
      <Section2 />
    </div>
  )
}

export default App

