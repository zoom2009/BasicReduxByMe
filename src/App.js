import React, { Component } from 'react'
import {connect} from 'react-redux'
import Button from './components/Button'

class App extends Component {
  render() {
    let {person} = this.props
    return (
      <div>
        <p>My name is : {person.name} .</p>
        <p>I'm {person.age} years old.</p>
        <Button />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  person: state.person
})

export default connect(mapStateToProps, null)(App)