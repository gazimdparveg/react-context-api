import React from 'react'
import { useContext } from 'react'  
 import usercons from './Context/Contest';




function Home() {

    
    const alldate2 = useContext(usercons);
    console.log(alldate2)

  return (
    <div>
 
    <h1>{alldate2.name } and  {alldate2.age}   </h1>
    </div>
  )
}

export default Home
