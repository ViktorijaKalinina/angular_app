import { createSelector } from "@ngrx/store";
import { getProductsState } from "../_store";
import { ProductsState } from "./products.reducer";

export const getProductsList = createSelector(getProductsState, (state: ProductsState) => state.list)
