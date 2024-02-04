import React from 'react'
import usercons from "./Contest";
 
 
const UseContext = (props)=>{
    const news = {
        'name':'gazi',
        'age': '5g'
    }
    return(
    <usercons.Provider value={news}>
     {props.children}
    </usercons.Provider>
    )
}

export default UseContext


