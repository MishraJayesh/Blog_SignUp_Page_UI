import React, { useState, useCallback } from 'react'
var fcount = new Set();
const Counterapp = () => {
 
 
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)
 
const incrementCounter = useCallback(() => {
  setCount(count + 1)
}, [count])
const decrementCounter = useCallback(() => {
  setCount(count - 1)
}, [count])
const incrementNumber = useCallback(() => {
  setNumber(number + 1)
}, [number])
   
fcount.add(incrementCounter);
fcount.add(decrementCounter);
fcount.add(incrementNumber);
//alert(fcount.size);
 
  return (
    <div>
      Count: {count}
      <button onClick={incrementCounter}>
         Increase counter
      </button>
      <button onClick={decrementCounter}>
         Decrease Counter
      </button>
      <button onClick={incrementNumber}>
         increase number
      </button>
    </div>
  )
}
 
 
export default Counterapp;