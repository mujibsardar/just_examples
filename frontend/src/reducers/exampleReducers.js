import {
  SET_EXAMPLE,
} from "../store/actions/actionTypes";

// NOT USED
const isEmpty = require("is-empty");

const initialState = {
  example: {},
  examples: [],
  errors: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_EXAMPLE:
      return {
        ...state,
        example: action.payload.data,
      };
    default:
      return state;
  }
}
