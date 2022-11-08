import React, { useEffect, useState } from 'react'

const Hooks = () => {
    const[count,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1);
        },2000)
    })
  return (
    <>
    <h3 style={{color:"blue"}}>HI I Have Rendered {count} times!!</h3>
    <h3 style={{color:"pink"}}>HI I Have Rendered {count} times!!</h3>
    <h3 style={{color:"orange"}}>HI I Have Rendered {count} times!!</h3>
    <h3 style={{color:"navy"}}>HI I Have Rendered {count} times!!</h3>
    <h3 style={{color:"aqua"}}>HI I Have Rendered {count} times!!</h3>
    <h3 style={{color:"green"}}>HI I Have Rendered {count} times!!</h3>
    <h3 style={{color:"gray"}}>HI I Have Rendered {count} times!!</h3>
    </>

  
  )
}

export default Hooks;