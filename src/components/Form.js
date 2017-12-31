import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createTask, setTask} from "../actions/taskAction";
import '../css/Form.css'

class Form extends Component {
    submitForm(e) {

        e.preventDefault();
        let task = this.props.tasks.task
        this.props.createTask(task);

        const callback = () => {
            task.address.raw_address = ''
            this.props.setTask(task)
        }

        setTimeout(callback, 1000)

    }

    handleChange(e) {

        let task = this.props.tasks.task;
        e.target.name === "location" ? task.address.raw_address = e.target.value : task.category = e.target.value
        return this.props.setTask(task);
    }


    render() {

        let {address, category} = this.props.tasks.task
        let {raw_address} = address

        return (
            <div>
                <h1>Add a Task</h1>
                <form className="form" onSubmit={(e) => this.submitForm(e)}>
                    <label htmlFor="location"> Address</label>
                    <input type="text" name="location" onChange={(e) => this.handleChange(e)} value={raw_address}
                           required/>
                    <label> Category</label>
                    <select onChange={e => this.handleChange(e)} value={category} name="categories" required>
                        <option value="pick_up" name="pick_up" >Pick up</option>
                        <option value="drop_off" name="drop_off" selected>Drop off</option>
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
    return {
        tasks: state.taskReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTask(task) {
            dispatch(createTask(task))
        },
        setTask(task) {
            dispatch(setTask(task))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)