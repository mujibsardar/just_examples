import axios from "axios";

import {
  GET_ERRORS,
  GET_EXAMPLE,
  SET_EXAMPLE
} from "./actionTypes";

const options = (data) => {
    return {
        headers: {
            'Authorization': localStorage.getItem('jwtToken'),
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data)
    };
};

export const submitNewExample = (exampleData) => {
    return dispatch => {
        return fetch('/examples', options(exampleData))
        .then(res => res.json())
    }
};

// Get single Example
export const getExample = (id) => dispatch => {
  axios
    .get("/examples/" + id)
    .then(res =>  dispatch({ type: SET_EXAMPLE, payload: res }))
    .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
      }
    );
};
