import axios from 'axios';
import moment from 'moment';

const ACCOUNT = '5077a6e3-8aee-4c04-b7e5-8a9d8ae942c0';
const HEADERS = {
  headers: { Authorization: 'Token eb0cb18af06be17e2eb3563bf06160fe49327129' }
};

export const fetchAllTasks = () => {
  return dispatch => {
    axios
      .get(`https://gsmtasks.com/api/tasks/tasks/?account=${ACCOUNT}`, HEADERS)
      .then(res => {
        const tasks = res.data;
        const lastUpdatedTaskTime = moment
          .max(lastTaskUpdated(tasks))
          .format('YYYY-MM-DDThh:mm:ss.SSSSSSZ');
        dispatch({
          type: 'LOAD_TASKS',
          payload: {
            tasks,
            lastUpdatedTaskTime
          }
        });
      })
      .catch(error => {
        dispatch({
          type: 'LOAD_TASKS_ERROR',
          payload: error.response
        });
      });
  };
};

export const createTask = task => {
  task['account'] = `https://gsmtasks.com/api/tasks/accounts/${ACCOUNT}/`;

  return dispatch => {
    axios
      .post(
        `https://gsmtasks.com/api/tasks/tasks/?account=${ACCOUNT}`,
        task,
        HEADERS
      )
      .then(res => {
        dispatch({
          type: 'ADD_TASK',
          payload: res.data
        });
      })
      .catch(error => {
        dispatch({
          type: 'ADD_TASK_ERROR',
          payload: error.response
        });
      });
  };
};

export const setTask = task => {
  return dispatch => {
    dispatch({
      type: 'SET_TASK',
      payload: task
    });
  };
};

export const refreshTasks = lastUpdatedTaskTime => {
  return dispatch => {
    axios
      .get(
        `https://gsmtasks.com/api/scenes/dashboard/?account=${ACCOUNT}&updated_at__gt=${lastUpdatedTaskTime}&ordering=updated_at`,
        HEADERS
      )
      .then(res => {
        const tasks = res.data.tasks;
        const lastUpdatedTaskTime =
          tasks.length > 0
            ? moment
                .max(lastTaskUpdated(tasks))
                .format('YYYY-MM-DDThh:mm:ss.SSSSSSZ')
            : null;
        if (tasks.length > 0) {
          dispatch({
            type: 'REFRESH_TASKS',
            payload: {
              tasks,
              lastUpdatedTaskTime
            }
          });
        }
      })
      .catch(error => {
        dispatch({
          type: 'REFRESH_TASKS_ERROR',
          payload: error
        });
      });
  };
};

const lastTaskUpdated = tasks => tasks.map(task => moment(task.updated_at));
