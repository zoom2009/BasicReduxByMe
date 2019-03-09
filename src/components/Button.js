import React, { Component } from 'react'
import {connect} from 'react-redux'
import { SetName, SetAge } from '../redux/Person/PersonAction';

class Button extends Component {
  render() {
    let {setName, setAge} = this.props
    return (
      <p>
        <button onClick={()=>setName('Sikarin')}>Set Name</button>
        <button onClick={()=>setAge(22)}>Set Age</button>
      </p>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  setName: payload => dispatch(SetName(payload)),
  setAge: payload => dispatch(SetAge(payload))
})

export default connect(null, mapDispatchToProps)(Button)


