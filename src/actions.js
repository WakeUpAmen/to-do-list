let nextTodoId = 0;
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
});
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const addAll = () => ({
  type: 'ADD_ALL',
});

export const minusAll = () => ({
  type: 'MINUS_ALL',
});

export const getActive = () => ({
  type: 'GET_ACTIVE',
});
