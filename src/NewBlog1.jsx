import React from 'react'
import { useContext } from 'react'  
 import usercons from './Context/Contest';

function NewBlog1() {
    const date = useContext(usercons)
  return (
    <div>
     <h2> {date.roll} and {date.email}</h2>
    </div>
  )
}

export default NewBlog1
