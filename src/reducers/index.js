import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  TOGGLE_TODO
} from '../actions';

function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) =>
        (index === action.index)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    case EDIT_TODO:
      return state.map((todo, index) =>
        (index === action.index)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    case DELETE_TODO:
      return state.map((todo, index) =>
        (index === action.index)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}

export default todos;