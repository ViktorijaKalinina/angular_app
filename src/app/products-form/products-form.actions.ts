import { createAction, props } from '@ngrx/store';
import { Products } from './products-form.reducer';

export const callAddProduct = createAction(
  '[ProductsForm] Add Product'
);

export const addProductSuccess = createAction(
  '[ProductsForm] Add Products Success',
  props<{result: string}>()
)

export const callDeleteProduct = createAction(
  '[ProductsForm] Delete Product',
  props<{id: number}>()
)

export const deleteProductSuccess = createAction(
  '[ProductsForm] Delete Product Success',
  props<{list: Products[]}>()
)

export const callEditProduct = createAction(
  '[ProductsForm] Edit Product',
  props<{id: number}>()
)

export const editProductSuccess = createAction(
  '[ProductsForm] Edit Product Success',
  props<{list: Products[]}>()
)

export const callUpdateProduct = createAction(
  '[ProductsForm] Update Product'
)

export const updateProductSuccess = createAction(
  '[ProductsForm] Update Product Success',
  props<{list: Products[]}>()
)

export const hideAddEditForm = createAction(
  '[ProductsForm] Hide AddEdit Form'
)

export const displayAddEditForm = createAction(
  '[ProductsForm] Display AddEdit Form'
)
