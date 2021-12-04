import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductInitialStateType, ProductTypes } from './productreducers.types';

const productInitialState: ProductInitialStateType = {
  isLoading: true,
  error: '',
  products: [],
};

const products = createSlice({
  name: 'productReducers',
  initialState: productInitialState,
  reducers: {
    addProductItem: (state, action: PayloadAction<ProductTypes>) => {
      state.products.push(action.payload);
    },
  },
});

export const { addProductItem } = products.actions;

export const productsReducers = products.reducer;
