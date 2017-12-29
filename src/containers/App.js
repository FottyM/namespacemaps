import PropTypes from 'prop-types'
import React, {Component} from 'react';
import '../App.css';
import { connect } from 'react-redux'
import {fetchAllTasks} from '../actions/taskAction'
import {Map, Form} from '../components/index'

class App extends Component {
  componentWillMount(){
    this.props.fetchAllTasks()
  }


  render() {

    const markers = this.props.markers.tasks;

    return (<div className="App">
      <Map
          containerElement={<div style = {{ height: `800px` }}/>}
          mapElement={<div style = {{ height: `100%` }}/>}
          isMarkerShown markers={markers}/>
      <Form/>
    </div>);
  }
}

App.propTypes = {
  fetchAllTasks: PropTypes.func.isRequired,
  markers: PropTypes.array.isRequired
}

const mapStateToProps = (state)=>{
  return{
      markers: {...state.taskReducer }
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