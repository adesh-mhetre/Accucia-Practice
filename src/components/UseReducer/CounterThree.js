import React, {useReducer} from 'react'

const initialSate = 0;
const reducer = (state,action) =>{
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialSate;
        default:
            return state;

    }
}

export default function CounterThree() {

  const [count,dispatch] = useReducer(reducer, initialSate)
  const [countTwo,dispatchTwo] = useReducer(reducer, initialSate)
  return (
    <>
    <div>
        <h1>Counter One : {count}</h1>
      <button onClick={()=> dispatch('increment')}>Increment</button>
      <button onClick={()=> dispatch('decrement')}>Decrement</button>
      <button onClick={()=> dispatch('reset')}>Reset</button>
    </div>
    <div>
        <h1>Counter Two : {countTwo}</h1>
      <button onClick={()=> dispatchTwo('increment')}>Increment</button>
      <button onClick={()=> dispatchTwo('decrement')}>Decrement</button>
      <button onClick={()=> dispatchTwo('reset')}>Reset</button>
    </div>
    </>

  )
}
