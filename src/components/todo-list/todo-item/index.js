import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { AddTodo } from '../../actions/todos'
// import * as toolbox from '../../toolbox'
// import './index.less'

class TodoListItem extends Component {
    constructor(props) {
      super(props)
      this.props = props
      this.ListItemClick = this.ListItemClick.bind(this)
    }
    ListItemClick(element, id) {
      // get tmp as list of todos except the clicked one!
      let tmp = this.props.modelTodo.todos.filter(element => {
        return element.id !== id
      })
      console.log(element)
      console.log(tmp)
    }
    render() {
      return (
        <li data-id={this.props.id} onClick={(e) => this.ListItemClick(e, this.props.id)}>{this.props.text}</li>
      )
    }
  }

  export default TodoListItem