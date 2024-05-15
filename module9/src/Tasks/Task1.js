import React from 'react'

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Carol' },
  ];

const Task1 = () => {
      const listItems = users.map((user) =>
        <li key={user.id}>
          {user.name}
        </li>
      );
      return (
        <ul>{listItems}</ul>
      );
}

export default Task1
