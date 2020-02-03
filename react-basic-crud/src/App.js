import React, { useState, useRef } from "react";
import "./App.css";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Kim",
      email: "email@email.com",
      active: true
    },
    {
      id: 2,
      name: "Lim",
      email: "email@email.com",
      active: false
    },
    {
      id: 3,
      name: "Jung",
      email: "email@email.com",
      active: false
    }
  ]);

  const [inputs, setInputs] = useState({
    name: "",
    email: ""
  });

  const nextId = useRef(4);

  const onChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };
  const onCreate = () => {
    const newUser = {
      id: nextId.current,
      name: inputs.name,
      email: inputs.email,
      active: false
    };
    setUsers(users.concat(newUser));
    setInputs({
      name: "",
      email: ""
    });
    nextId.current += 1;
  };

  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const onDelete = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const activeUser = () => {
    let number = 0;
    number = users.filter(user => user.active === true);
    return number;
  };

  const count = activeUser();
  return (
    <>
      <CreateUser
        onChange={onChange}
        onCreate={onCreate}
        name={inputs.name}
        email={inputs.email}
      />
      <UserList users={users} onToggle={onToggle} onDelete={onDelete} />
      <p>active User: {count.length}</p>
    </>
  );
}

export default App;
