import React from "react";

function User({ user, onToggle, onDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        onClick={() => onToggle(user.id)}
        defaultChecked={user.active}
      />
      <b>{user.name}</b> &nbsp; {user.email}
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </li>
  );
}

function UserList({ users, onToggle, onDelete }) {
  return (
    <ul>
      {users.map(user => (
        <User
          key={user.id}
          user={user}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default UserList;
