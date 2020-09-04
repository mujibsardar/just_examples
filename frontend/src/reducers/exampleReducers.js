import {
  SET_EXAMPLE,
  SET_EXAMPLES,
  SEARCH_EXAMPLES,
} from "../store/actions/actionTypes";

// SEARCH STEP X)
import { searchExamples } from "../store/actions/examplesActions";

const initialState = {
  example: {},
  examples: [],
  errors: []
};

export default function(state = initialState, action) {
  // TODO Remove later
  console.log(`reducer action.payload ${action.payload}`);
  console.log(`reducer action.type ${action.type}`);
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
    // SEARCH STEP X)
    case SEARCH_EXAMPLES:
    // TODO Remove later
      console.log(`CASE FOUND`);
      searchExamples(action.payload);
    default:
      return state;
  }
}
