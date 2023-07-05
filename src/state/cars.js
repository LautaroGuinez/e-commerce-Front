import { createAction, createReducer } from "@reduxjs/toolkit";


export const removeToCars = createAction("REMOVE_TO_CARS");

export const addToCars = createAction("ADD_TO_CARS");

export const initialState = {
  cars: [],
};

const carsReducer = createReducer(initialState, {
  [addToCars]: (state, action) => {
    return {
      ...state,
      cars: [...state.cars, action.payload],
    };
  },
  [removeToCars]: (state, action) => {
    return {
      ...state,
      cars: state.cars.filter((product) => product.id !== action.payload.id),
    };
  },
});

export default carsReducer;

