import React from 'react'
import {useState, useEffect} from 'react'
import fethc from './fethc'
function Fetch() {
  const [count, SetCount] =useState(0)

  useEffect(()=>{
    document.title = `count ${count}`
  },
[count])

function addCount (){
  SetCount(c=> c + 2)
}
  return (
    <div>
      <p>{count}</p>
      <button onClick={addCount}>ADD</button>
   <Fethc/>
    </div>

    
  )
}

export default Fetch
