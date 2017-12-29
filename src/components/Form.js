import PropTypes from 'prop-types'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { createTask, setTask} from "../actions/taskAction";
import '../css/Form.css'

class Form extends Component{
  submitForm(e){
    e.preventDefault();
    this.props.createTask(null);
  }

  handleChange(e){
    console.log(e.target.value)
  }


  render(){

      let { address, category } = this.props.tasks.task;
      let { raw_address } = address;

    return(
      <div>
        <h1>Add a Task</h1>
          <form className="form" onSubmit={(e) => this.submitForm(e)}>
              <label> Address</label>
              <input type="text" name="location" onChange={ (e) => this.handleChange(e)} />
              <label> Category</label>
                  <select onChange={ e => this.handleChange(e)} >
                      <option value="pickup" name="pick_up">pick up</option>
                      <option value="drop_off" name="drop_off">drop off</option>
                  </select>
              <input type="submit" className='btn' value="ADD TASK"/>
          </form>
      </div>
    )
  }
}

Form.propTypes = {
    createTask: PropTypes.func.isRequired,
    tasks: PropTypes.object.isRequired,
    setTask: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return{
    tasks: state.taskReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTask(task){
      dispatch(createTask(task))
    },
      setTask(task){
      dispatch(setTask(task))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)