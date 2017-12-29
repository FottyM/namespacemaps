import PropTypes from 'prop-types'
import React, {Component} from 'react';
import '../App.css';
import {connect} from 'react-redux'
import {fetchAllTasks, refreshTasks} from '../actions/taskAction'
import {Map, Form} from '../components/index'

class App extends Component {

    componentWillMount(){
        this.props.fetchAllTasks();
    }

    componentDidMount() {
        const callback = () => {
            this.props.refreshTasks(this.props.markers.lastUpdatedTaskTime)
        }
        setInterval(callback, 2000)
    }


    render() {

        const markers = this.props.markers.tasks;

        return (<div className="App">
            <Map
                containerElement={<div style={{height: `800px`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
                isMarkerShown markers={markers}/>
            <Form/>
        </div>);
    }
}

App.propTypes = {
    fetchAllTasks: PropTypes.func.isRequired,
    markers: PropTypes.objectOf(PropTypes.object).isRequired,
    refreshTasks: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        markers: {...state.taskReducer}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllTasks() {
            dispatch(fetchAllTasks())
        },
        refreshTasks(lastUpdatedTaskTime){
            dispatch(refreshTasks(lastUpdatedTaskTime))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);