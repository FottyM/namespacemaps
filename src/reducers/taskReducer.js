const initialState = {
    tasks: [],
    task: {}
}
const taskReducer = (state = initialState, action ) =>{
    switch (action.type){
        case 'LOAD_MARKERS':
            return {...state, tasks: [...action.payload] }
        case 'LOAD_MARKERS_ERROR':
            return {...state}
        case 'ADD_TASK':
            return {...state}
        case 'ADD_TASK_ERROR':
            return {...state}
        default:
            return {...state}
    }
}

export default taskReducer;

