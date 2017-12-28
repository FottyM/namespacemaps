const initialState = {
    tasks: []
}
const markerReducer = (state = initialState, action ) =>{
    switch (action.type){
        case 'LOAD_MARKERS':
            return {...state, tasks: [...action.payload] }
        case 'LOAD_MARKERS_ERROR':
            return {...state}
        default:
            return {...state}
    }
}

export default markerReducer;

