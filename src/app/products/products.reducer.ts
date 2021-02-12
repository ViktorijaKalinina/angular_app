import { createReducer, on, props } from "@ngrx/store"
import { insertNewItem } from "./products.actions"

export interface Products {
  title: string
}

export interface ProductsState {
  list: Products[]
}

export const initialState: ProductsState = {
  list: [
    {title: 'Item 1'},
    {title: 'Item 2'},
    {title: 'Item 3'},
    {title: 'Item 4'},
    {title: 'Item 5'},
  ]
}

export const productsReducer = createReducer(
  initialState,
  on(insertNewItem, (state, props) => ({
    ...state,
    list: [...state.list, {title: props.title}]
  }))
);
