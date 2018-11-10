import * as actionTypes from "./actionTypes";

export const saveResult = result => {
  // const updatedResult = result * 2;

  return {
    type: actionTypes.STORE_RESULT,
    result: result
  };
};

export const storeResult = result => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldConter = getState().counter.counter;
      console.log("oldConter>>>", oldConter);
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResult = resultElId => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: resultElId
  };
};
