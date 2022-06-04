import React from 'react'

function Input({placeholder, handleInput, value}) {
  return (
    <div>
    <input value={value} type='number' onChange={(e)=>handleInput(e.target.value)} placeholder={placeholder} className='form-control m-1'/>
</div>
  )
}

export default Input