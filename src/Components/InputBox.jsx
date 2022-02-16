import React from 'react'

export default function InputBox({setVal,labelval}) {
  return (
      <div>
          <label htmlFor="fname">{labelval}</label>
          <input type="text" name="fname" onChange={(e)=>{setVal(e.target.value)}} />
    </div>
  )
}
