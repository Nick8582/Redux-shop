import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../products/product.types";

const initialState: IProduct[] = []

export const cardSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      state.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter(p => p.id !== action.payload.id)
    },
  },
})

export const cartReducer = cardSlice.reducer
export const cartActions = cardSlice.actions
