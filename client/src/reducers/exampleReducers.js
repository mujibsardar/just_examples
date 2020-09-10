import {
  SET_EXAMPLE,
  SET_EXAMPLES
} from "../store/actions/actionTypes";

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
    case SET_EXAMPLES:
      return {
        ...state,
        examples: action.payload.data,
      };
    default:
      return state;
  }
}
