import React from 'react'

function Select({handleSelect, value}) {
  return (
    <select onChange={(e)=>handleSelect(e.target.value)} value={value} className="m-3 form-control sm">
    <optgroup>
        <option value='' disabled>--Choose an Option--</option>
        <option value='0.3' >30% Outstanding</option>
        <option value='0.2' >20% Good</option>
        <option value='0.15' >15% It was OK </option>
        <option value='0.10' >10% Bad</option>
        <option value='0.5' >5% Terrible</option>
    </optgroup>
 </select>
  )
}

export default Select