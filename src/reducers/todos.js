import { TODOS } from '../constants'

const initialState = {
  todos: [],
  deletingTodo: false,
  deleteTodo: false,
  addingTodo: false,
  addTodo: false,
  // addingTodos: false,
  // addTodos: false,
}

export default function modelTodo(state = initialState, action) {
  switch (action.type) {

    case TODOS.ADD_TODO_BEGIN:
      return {
          ...state,
          addingTodo: true,
          addTodo: false,
      }

    case TODOS.ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.item],
        addTodo: true,
        addingTodo: false,
      }

    // case TODOS.POPULATE_TODOS_BEGIN:
    //   return {
    //     ...state,
    //     addingTodos:true,
    //   }
    // case TODOS.POPULATE_TODOS_SUCCESS:
    //   return {
    //     ...state,
    //     addTodos:false,
    //     addingTodos: false,
    //   }
    default:
      return state

  }
}

