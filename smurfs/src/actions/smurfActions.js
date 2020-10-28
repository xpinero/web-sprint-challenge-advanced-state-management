import axios from 'axios';

export const FETCH_SMURF_GET = 'FETCH_SMURF_GET';
export const FETCH_SMURF_FOUND ='FETCH_SMURF_FOUND';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const fetchSmurfs = () => dispatch => {
  dispatch({type: FETCH_SMURF_GET});
  axios
  .get('http://localhost:3333/smurfs')
  .then(res => {
    console.log('res data: ', res.data);
    dispatch({type: FETCH_SMURF_FOUND, payload: res.data});
  }).catch(err => dispatch({type: FETCH_SMURF_FAILURE, payload: err.data}));
};

export const addSmurf = (name, age, height) => dispatch => {
  console.log('axios');
  axios
  .post('http://localhost:3333/smurfs', {name, age, height})
  .then(res => {
    console.log('res data: ', res.data);
    dispatch({type: FETCH_SMURF_FOUND, payload: res.data});
  }).catch(err => {
    console.error(err);
    dispatch({type: FETCH_SMURF_FAILURE, payload: err.data});
  });
};