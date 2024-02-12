  "use client" 
   
   import Image from 'next/image'

import styles from './page.module.css'
import Mockfunction from './Mockfunction'
import { useState } from 'react'

export default function Home(){
  const [cnt,setCnt]=useState(0)

  const fnIncrement=()=>{
    setCnt(cnt+1)
  } 

  const fnDecrement=()=>{
    setCnt(cnt-1)
  }
  return <div>
    <Mockfunction cnt={cnt} fninc={fnIncrement}  fndec={fnDecrement}/>
  </div>
}