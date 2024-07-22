import React,{useState,useEffect} from 'react'

export default function HookMouse() {

    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    const logMousePosition = (e)=>{
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        console.log('useEffect Called');
        window.addEventListener('mousemove',logMousePosition);

        // clean up function
        return ()=>{
            console.log('useEffect - Removing event listener');
            window.removeEventListener('mousemove',logMousePosition);
        }
    },[]);
  return (
    <div>
      Hooks X - {x} Y - {y} 
    </div>
  )
}
