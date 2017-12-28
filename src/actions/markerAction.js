import axios from 'axios';

const ACCOUNT = '5077a6e3-8aee-4c04-b7e5-8a9d8ae942c0'
const HEADERS = { headers : { 'Authorization': 'Token eb0cb18af06be17e2eb3563bf06160fe49327129' }}


export const  fetchAllTasks = () =>{
    return  dispatch => {
         axios.get(`https://gsmtasks.com/api/tasks/tasks/?account=${ACCOUNT}`, HEADERS )
             .then( res =>{
                 dispatch({
                     type: 'LOAD_MARKERS',
                     payload: res.data
                 })
             }  )
             .catch( error => {
                 dispatch({
                     type: 'LOAD_MARKERS_ERROR',
                     payload: error.response
                 })
             } )

    }
}