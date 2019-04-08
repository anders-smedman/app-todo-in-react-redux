import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import i18next from 'i18next'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { TodoInput, TodoList } from '../'


class App extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }
  componentWillUpdate(){
    console.log("App will update")
  }
  render() {

    console.log("Render App!")
      return (
        <Grid fluid>
          <Row>
            <Col xs={12} md={6}>
              <h1>{ i18next.t('TodoList')}</h1>
            </Col>
            <Col xs={12} md={6}>
              <div className="tagline form-group">
                A simple todo application.
              </div>
            </Col>
          </Row>
         <Row>
           <Col xs={12}>
            <hr/>
           </Col>
         </Row>
          <Row>
            <Col xs={12} md={6}>
              <TodoInput {...this.props} />
            </Col>
            <Col xs={12} md={6}>
              <TodoList {...this.props} />
            </Col>
          </Row>

        </Grid>
      )
  }
}

const mapStateToProps = state => ({
  modelTodo: state.modelTodo,
});

export default connect(mapStateToProps)(withRouter(App))