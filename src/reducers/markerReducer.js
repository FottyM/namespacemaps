const initialState = {
    tasks: {}
}
const markerReducer = (state = initialState, action ) =>{
    switch (action.type){
        case 'LOAD_MARKERS':
            return {...state}
        case 'LOAD_MARKERS_ERROR':
            return {...state}
        default:
            return {...state}
    }
}

