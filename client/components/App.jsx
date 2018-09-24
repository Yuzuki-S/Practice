import React from 'react'
import {connect} from 'react-redux'
import {addPackageAction} from '../actions'


class App extends React.Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(bag) {
    {this.props.addPackage(bag)}
  }
  render() {
    return (
      <div className='app-container'>
      <div>Sports<button onClick = {()=>this.handleClick("sports")}>Add</button></div>
      <div>Casual<button onClick = {()=>this.handleClick("casual")}>Add</button></div>
      <div>Work<button onClick = {()=>this.handleClick("work")}>Add</button></div>

      {this.props.state.length > 0 &&  <p>Thank you for ordering {this.props.state} package</p>
      }
   
      
      </div>
    )
  }
}

function mapStateToProps (state){
  console.log(state)
  return {state:state.packages}
}

function mapDispatchToProps(dispatch){
  return {
    addPackage: (bag) => {
      dispatch(addPackageAction(bag))
    }
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (App)
