import React from 'react'
import usercons from './Context/Contest'

function Blogs(props) {
    const blo = {
        "roll":'34',
        'email':"gazi@gmail"
    }
  return (
    <div>
      <usercons.Provider value={blo}>
    {props.children}
      </usercons.Provider>
    </div>
  )
}

export default Blogs
