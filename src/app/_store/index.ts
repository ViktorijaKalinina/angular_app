import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromProducts from "../products/products.reducer";
import * as fromProductsForm from "../products-form/products-form.reducer";

export interface RootState {
  products: fromProducts.ProductsState,
  productsForm: fromProductsForm.ProductsFormState
}

export const appReducer: ActionReducerMap<RootState> = {
  products: fromProducts.productsReducer,
  productsForm: fromProductsForm.productsFormReducer
}

export const getProductsState = createFeatureSelector<fromProducts.ProductsState>('products');
export const getProductsFormState = createFeatureSelector<fromProductsForm.ProductsFormState>('productsForm');
