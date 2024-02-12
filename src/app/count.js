import React,{useState} from 'react'

 const Count = () => {
    const [cnt,setCnt]=useState(0)
    const increment=()=>{
        setCnt(cnt+1)
    }
  return (
    <div data-testid="sun">
        <h1 data-testid="ef"> {cnt}</h1>
        <button onClick={increment}>INCREMENT</button>
        
        </div>
  )
  
}
export default Count