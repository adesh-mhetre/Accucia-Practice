import React from 'react'

export default function HookCounter() {
    const initialCount = 0;
    const [count, setCount] = React.useState(initialCount);

    const incrementFive = () => {
        for(let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            <h1>Counter</h1>
            Count: {count}
            <br />
        <button onClick={()=>setCount(count-1)}>Decrement </button>
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(count + 1)}>Increment</button>
        <button onClick={()=>incrementFive()}>Increment Five</button>
        </div>
    )
}
