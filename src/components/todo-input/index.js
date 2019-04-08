import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { AddTodo } from '../../actions/todos'
import * as toolbox from '../../toolbox'
// import './index.less'

class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.props = props
    this.KeyDown = this.KeyDown.bind(this)
    this.ButtonClick = this.ButtonClick.bind(this)
    this.DispatchTodo = this.DispatchTodo.bind(this)
  }

  componentDidUpdate() {
    if (this.props.modelTodo.addTodo){
      window.localStorage.setItem("todolist", JSON.stringify(this.props.modelTodo.todos))
    }
  }
  KeyDown(event) {
    if(event.keyCode === 13){
      this.DispatchTodo()
    }
  }
  ButtonClick() {
    this.DispatchTodo()
  }
  DispatchTodo(){
    let o = {
      id: (new Date).getTime(),
      text: document.querySelector("#text").value
    }
    this.props.dispatch(AddTodo(o))
    document.querySelector("#text").value=""
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12 form-group">
            <input id="text" className="form-control" placeholder="Todo" onKeyDown={(e) => this.KeyDown(e)} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 form-group text-right">
            <button className="btn" onClick={(e) => this.ButtonClick(e)}>
              Add
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default TodoInput