import React, {useReducer,useContext} from 'react'
import { CountContext } from '../../App';



// const initialSate = 0;
// const reducer = (state,action) =>{
//     switch(action){
//         case 'increment':
//             return state + 1;
//         case 'decrement':
//             return state - 1;
//         case 'reset':
//             return initialSate;
//         default:
//             return state;

//     }
// }

export default function CounterOne() {

//   const [count,dispatch] = useReducer(reducer, initialSate)
const countContext = useContext(CountContext);
  
  return (
    <div>
        <h1>{countContext.countState}</h1>
      <button onClick={()=> countContext.countDispatch('increment')}>Increment</button>
      <button onClick={()=> countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={()=> countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}
