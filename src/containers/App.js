import React, {Component} from 'react';
import '../App.css';
import { connect } from 'react-redux'
import {fetchAllTasks} from '../actions/markerAction'
import {Map, Form} from '../components/index'

class App extends Component {
  componentWillMount(){
    this.props.fetchAllTasks()
  }


  render() {
    return (<div className="App">
      <Map containerElement={<div style = {{ height: `800px` }}/>} mapElement={<div style = {{ height: `100%` }}/>} isMarkerShown/>
      <Form/>
    </div>);
  }
}

const mapStateToProps = (state)=>{
  return{
      ...state.markerReducer
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
      fetchAllTasks(){
        dispatch(fetchAllTasks())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);