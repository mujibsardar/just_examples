import axios from "axios";

// SEARCH STEP 1) Import set examples string type
import {
  GET_ERRORS,
  SET_EXAMPLE,
  SET_EXAMPLES
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

// SEARCH STEP 2) Create an action that makes API call to search all examples
// Search Examples
export const searchExamples = (queryData) => dispatch => {
  // TODO Remove later
  console.log(`searchExamples queryData: ${queryData}`);
  return dispatch => {
      return fetch('/examples/search', options(queryData))
      .then(res => dispatch({ type: SET_EXAMPLES, payload: res }))
      .catch(err => {
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
        }
      );
  }
};
