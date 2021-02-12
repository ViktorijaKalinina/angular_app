import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromProducts from "../products/products.reducer"

export interface RootState {
  products: fromProducts.ProductsState
}

export const appReducer: ActionReducerMap<RootState> = {
  products: fromProducts.productsReducer
}

export const getProductsState = createFeatureSelector<fromProducts.ProductsState>('products');
