import { TODOS } from '../constants'

export const AddTodoStart = () => ({
    type: TODOS.ADD_TODO_BEGIN,
})
export const AddTodoDone = (todo) => ({
    type: TODOS.ADD_TODO_SUCCESS,
    item: todo,
})
export function AddTodo(o) {
    return dispatch => {

        dispatch(AddTodoStart())

        dispatch(AddTodoDone(o))
        
    }
}

export const PopulateTodosBegin = () => ({
    type: TODOS.POPULATE_TODOS_BEGIN,
})
export const PopulateTodosSuccess = (list) => ({
    type: TODOS.POPULATE_TODOS_SUCCESS,
})
export function PopulateTodos(list){
    return dispatch => {

        dispatch(PopulateTodosBegin())

        list.forEach(element => {
            dispatch(AddTodoDone(element))
        });

        // dispatch(PopulateTodosSuccess())

    }
}