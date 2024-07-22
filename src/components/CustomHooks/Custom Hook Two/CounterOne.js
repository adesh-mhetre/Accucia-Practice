import React,{useState} from 'react'
import useCounter from './useCounter';

function CounterOne() {
    // const [count, setCount] = useState(0)

    // const increment = () =>{
    //   setCount(prevCount => prevCount +1)
    // }
    // const decrement = () =>{
    //   setCount(prevCount => prevCount - 1)
    // }
    // const reset = () =>{
    //   setCount(0)
    // }

    const [count, increment, decrement, reset] = useCounter();

  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterOne
