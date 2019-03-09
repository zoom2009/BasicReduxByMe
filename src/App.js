import React, { Component } from 'react'
import {connect} from 'react-redux'
import { SetName, SetAge } from './redux/Person/PersonAction';

class App extends Component {
  render() {
    let {person, setName, setAge} = this.props
    return (
      <div>
        <p>My name is : {person.name} .</p>
        <p>I'm {person.age} years old.</p>
        <p>
          <button onClick={()=>setName('Sikarin')}>Set Name</button>
          <button onClick={()=>setAge(22)}>Set Age</button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  person: state.person
})

const mapDispatchToProps = dispatch => ({
  setName: payload=>dispatch(SetName(payload)),
  setAge: payload=>dispatch(SetAge(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(App)