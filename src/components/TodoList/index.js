import React from 'react';
import Todo from '../Todo';

const TodoList = ({list, onTodoClick}) => {
  return (
    <ul>
      {list.map(todo => {
          if(todo.completed === false){
            return <Todo key={todo.id} text={todo.text} onClick={() => onTodoClick(todo.id)} />
          }    
      })}
    </ul>
  );
};

export default TodoList;