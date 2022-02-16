import React from 'react'

export default function Number({age_of_establishment,setAge_of_establishment}) {
  return (
      <div>
          <label htmlFor="quantity">{age_of_establishment}</label>
          <input type="number" id="quantity" name="quantity" min="0" max="100" onChange={(e)=>setAge_of_establishment(e.target.value)}></input>
    </div>
  )
}
