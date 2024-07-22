import React from 'react'

export default function HookCounterThree() {
    const [name,setName] = React.useState({firstName :  '',lastName :  ''})


  return (
    <div>
        <h1>Name</h1>
        <input type="text" value={name.firstName} onChange={(e) => setName({ ...name,firstName: e.target.value})} />
        <input type="text" value={name.lastName} onChange={(e) => setName({...name, lastName: e.target.value})} />
        <h2>Your first name is - {name.firstName}</h2>
        <h2>Your Last name is - {name.lastName}</h2>
      
    </div> 
  )
}
