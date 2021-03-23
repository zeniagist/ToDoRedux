import {
  ADD_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  DELETE_TODO
} from '../actions';

const todos = (state = [], action) => {
  switch (action.type) {
    // returns text of added To-Do item
    case ADD_TODO:
      return [
        ...state,
        {
           text: action.text,
           completed: false
        }
     ]
    //  click on To-Do item
    case TOGGLE_TODO:
      return state.map((todo, index) =>
          (index === action.index)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    // edit To-Do item
    case EDIT_TODO:
      return state.map((todo, index) => 
        (index === action.index)
        ? {...todo, text: todo.text}
        : todo
      )
    // delete To-Do Item
    case DELETE_TODO:
      return state.filter((todo, index) =>
        (index !== action.index)
      )
    // nothing is triggered (default state)
    default:
    return state
  }
}

export default todos;