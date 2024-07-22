import React, { useState } from "react";
import useInput from "./useInput";

function UserForm() {
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')

  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName()
    resetLastName()
  };
  return (
    <div>
      {/* <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="">First name</label>
            <input onChange={e =>setFirstName(e.target.value) } type="text" value={firstName} />
        </div>
        <div>
            <label htmlFor="">Last name</label>
            <input onChange={e =>setLastName(e.target.value) } type="text" value={lastName} />
        </div>
        <button>Submit</button>
      </form> */}
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">First name</label>
          <input
            {...bindFirstName}
            type="text"
            value={firstName}
          />
        </div>
        <div>
          <label htmlFor="">Last name</label>
          <input
            {...bindLastName}
            type="text"
            value={lastName}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
