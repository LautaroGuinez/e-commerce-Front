import { createAction, createReducer } from "@reduxjs/toolkit";

export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const removeItem = (itemId) => {
  return {
    type: "REMOVE_ITEM",
    payload: itemId,
  };
};
const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_ITEM":
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    default:
      return state;
  }
};

export default cartReducer;
