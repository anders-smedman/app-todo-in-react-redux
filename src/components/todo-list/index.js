import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { TodoListItem } from '..'
import { AddTodo } from '../../actions/todos'
// import * as toolbox from '../../toolbox'
import './index.less'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.props = props
    this.TodoToList = this.TodoToList.bind(this)
  }
  componentWillMount() {
    console.log("TodoList will mount")
    let tmp = window.localStorage.getItem("todolist")
    if (tmp !== null && this.props.modelTodo.todos.length === 0){
      console.log("localStorage exist, store is empty, add localStorage to store!")
      JSON.parse(tmp).forEach(element => {
        this.props.dispatch(AddTodo(element))
      })
    }
  }
  TodoToList(todos) {
    let items = []
    if (todos.length>0){
      todos.forEach(element => {
        items.push(<TodoListItem text={element.text} id={element.id} key={element.id} {...this.props} />)
      });
    }
    return items
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12 form-group">
            <ul>
              {this.TodoToList(this.props.modelTodo.todos)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


export default TodoList