import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const inititalState = {
  results: []
};

const deleteResult = (sate, action) => {
  const updatedArray = state.results.filter(
    result => result.id !== action.resultElId
  );
  return updateObject(state, { results: updatedArray });
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result })
      });
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);

    default:
      return state;
  }
};

export default reducer;
