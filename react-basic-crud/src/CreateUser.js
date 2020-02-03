import React from "react";

function CreateUser({ name, email, onChange, onCreate }) {
  return (
    <>
      <input name="name" placeholder="name" value={name} onChange={onChange} />
      <input
        name="email"
        placeholder="email"
        value={email}
        onChange={onChange}
      />
      <button onClick={onCreate}>Register</button>
    </>
  );
}
export default CreateUser;
