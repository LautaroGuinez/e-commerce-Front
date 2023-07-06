import { createAction, createReducer } from "@reduxjs/toolkit";

export const addToCars = createAction("ADD_TO_CARS");
export const removeToCars = createAction("REMOVE_TO_CARS");
export const addQuantity =createAction("ADD_QUANTITY")
export const subtractQuantity=createAction("SUBTRACT_QUANTITY")
export const initialState = {
  cars: [],
};

const carsReducer = createReducer(initialState, {
  [addToCars]: (state, action) => {
    const existingProduct = state.cars.find(
      (product) => product.id === action.payload.id
    );
  
    if (existingProduct) {
      alert("Product already added to shopping cart");
      return state;
    }
  
    const newProduct = {
      ...action.payload,
      quantity: 1, // Establecer la cantidad en 1 al agregar el producto
    };
  
    return {
      ...state,
      cars: [...state.cars, newProduct],
    };
  },

  [removeToCars]: (state, action) => {
    return {
      ...state,
      cars: state.cars.filter((product) => product.id !== action.payload.id),
    };
  },


  [addQuantity]: (state, action) => {
    const { id } = action.payload;

    const updatedCars = state.cars.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });

    return {
      ...state,
      cars: updatedCars,
    };
  },

  [subtractQuantity]: (state, action) => {
    const { id } = action.payload;

    const updatedCars = state.cars.map((product) => {
      if (product.id === id && product.quantity > 0) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    });

    return {
      ...state,
      cars: updatedCars,
    };
  },

});

export default carsReducer;
