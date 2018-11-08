export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBSTRACT = "SUBSTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

//action creators
export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add = () => {
  return {
    type: ADD,
    value: 10
  };
};

export const substract = () => {
  return {
    type: SUBSTRACT,
    value: 15
  };
};

export const storeResult = result => {
  return {
    type: STORE_RESULT,
    result: result
  };
};

export const deleteResult = id => {
  return {
    type: DELETE_RESULT,
    resultElId: id
  };
};
