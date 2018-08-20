import React from 'react';

const Todo = ({id, onClick, text}) => {
  return (
    <li>
      <input type="checkbox" onClick={onClick} value ={id} /> 
      {text}
    </li>
  );
};

export default Todo;