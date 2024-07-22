import React,{useState,useEffect} from 'react'

export default function IntervalHookCounter() {
    const [count,setCount] = useState(0);

    const tick = ()=>{
        // console.log('tick');
        // setCount(count+1);// [count] in useEffect
        setCount(prevCount => prevCount + 1); //  [] in useEffect
    }

    useEffect(() =>{
        const interval = setInterval(tick,1000);

        return () =>{
            clearInterval(interval);
        }
    },[])
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}
