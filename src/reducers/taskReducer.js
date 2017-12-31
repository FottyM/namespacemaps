import moment from 'moment'

const initialState = {
    tasks: [],
    task: {
        address: {
            raw_address: ''
        },
        category: 'pick_up'
    },
    lastUpdatedTaskTime: moment().format('YYYY-MM-DDThh:mm:ss.SSSSSSZ')
}

const taskReducer = (state = initialState, action) => {
    let {tasks} = state;
    switch (action.type) {
        case 'LOAD_TASKS':
            let newtasks = action.payload.tasks.filter(filtertask)
            return {...state, tasks: newtasks, lastUpdatedTaskTime: action.payload.lastUpdatedTaskTime}
        case 'LOAD_TASKS_ERROR':
            return {...state}
        case 'ADD_TASK':
            return {...state}
        case 'ADD_TASK_ERROR':
            return {...state}
        case 'SET_TASK':
            return {...state, task: {...action.payload}}
        case 'REFRESH_TASKS':
            tasks = merge(tasks, action.payload.tasks).filter(filtertask)
            return {...state, tasks, lastUpdatedTaskTime: action.payload.lastUpdatedTaskTime}
        case 'REFRESH_TASKS_ERROR':
            return {...state}
        default:
            return {...state}
    }
}

export default taskReducer;

const merge = (oldUsers, newUsers) => {
    for (var i = 0; i < oldUsers.length; i++) {
        for (var j = 0; j < newUsers.length; j++) {
            if (oldUsers[i].id === newUsers[j].id) {
                oldUsers[i] = newUsers[j]
                newUsers.splice(j, 1)
            }
        }
    }
    return [...oldUsers, ...newUsers];
}

const filtertask = t => (t.state === 'assigned' && t.address.location.coordinates.length > 0) || (t.state === 'unassigned' && t.address.location.coordinates.length > 0);


