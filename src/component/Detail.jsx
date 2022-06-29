import React, { createContext, useState } from 'react'

export const store =createContext()

const Detail = (props) => {

    const [students,setStudents]=useState([

{

"Name":"Kusuma",
"Age":"22",
"Course":"CSE",
"Batch":"2021",
"id":"1"

},

{

    "Name":"Kusuma",
"Age":"22",
"Course":"CSE",
"Batch":"2021",
"id":"1"
    
    },


    ])
  return (
    <div>



<store.Provider  value={[students,setStudents]}>


    {props.children}


</store.Provider>




        
    </div>
  )
}

export default Detail;