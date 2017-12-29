import moment from 'moment'
const initialState = {
    tasks: [],
    task: {
        address: {
            raw_address: ''
        },
        category: ''
    },
    lastUpdatedTaskTime: moment().format('YYYY-MM-DDThh:mm:ss.SSSSSSZ')
}

    // .format('YYYY-MM-DDTHH:mm:ss.SSSSZ')
const taskReducer = (state = initialState, action ) =>{
    switch (action.type){
        case 'LOAD_TASKS':
            return {...state, tasks: [...action.payload.tasks], lastUpdatedTaskTime: action.payload.lastUpdatedTaskTime }
        case 'LOAD_TASKS_ERROR':
            return { ...state }
        case 'ADD_TASK':
            debugger
            return { ...state }
        case 'ADD_TASK_ERROR':
            return { ...state }
        case 'SET_TASK':
            return {...state, task: { ...action.payload }}
        case 'REFRESH_TASKS':
            return {...state, tasks: [...state.tasks,...action.payload.tasks], lastUpdatedTaskTime: action.payload.lastUpdatedTaskTime }
            // return {...state, tasks: [...action.payload.tasks], lastUpdatedTaskTime: action.payload.lastUpdatedTaskTime }
        default:
            return {...state}
    }
}

export default taskReducer;

