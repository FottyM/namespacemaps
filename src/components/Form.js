import React, {Component} from 'react'
import { connect } from 'react-redux'
import { createTask} from "../actions/taskAction";

// import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox'

class Form extends Component{
  submitForm(e){
    e.preventDefault();
    this.props.createTask();
  }


  render(){
    return(
      <div className="">
        <h1></h1>
          <form onSubmit={(e) => this.submitForm(e)}>
              <label>
                Location
                  <input type="text"/>
              </label>
              <label >
                Category
                  <select>
                      <option value="pickup">pickup</option>
                      <option value="drop_off">drop_off</option>
                  </select>
              </label>
              <input type="submit" value="ADD TASK"/>
          </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    tasks: state.taskReducer
  }
}

const mapDispacthToProps = (dispatch) => {
  return {
    createTask(task){
      dispatch(createTask(task))
    }
  }
}

export default connect(mapDispacthToProps, mapStateToProps)(Form)

