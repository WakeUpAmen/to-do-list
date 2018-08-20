// initial state
const initialState = [];

// action creators are in actions.js

// reducer
const todos = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false,
          },
        ];
      case 'TOGGLE_TODO':
        return state.map(todo => {
          if (todo.id !== action.id) {
            return todo;
          } else {
            return {
              ...todo,
              completed: true,
            };
          }
        });

      case 'ADD_ALL':
        return state.map(todo => {
          if (todo.completed === false) {
            return todo;
          } else {
            return {
              ...todo,
              completed: false,
            };
          }
        });
      case 'MINUS_ALL':
        return state.map(todo => {
          if (todo.completed == true) {
            return todo;
          } else {
            return {
              ...todo,
              completed: true,
            };
          }
        });
      case 'GET_ACTIVE':
        return state.map(todo => {
          if (todo.completed === false) {
            return todo;
          }
        }).length;

      default:
        return state;
    }
  };
  
  export default todos;