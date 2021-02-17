import { createSelector } from '@ngrx/store';
import { getProductsFormState } from '../_store';
import { ProductsFormModule } from './products-form.module';
import { ProductsFormState } from './products-form.reducer';

export const getProductsFormList = createSelector(getProductsFormState, (state: ProductsFormState) => state.list)
export const getProductsForm = createSelector(getProductsFormState, (state: ProductsFormState) => state.formState)
export const getSelectedProduct = (id: number) => createSelector(getProductsFormState, ((state: ProductsFormState) => state.list.filter(item => item.id === id)[0]));
export const getFormDisplayStatus = createSelector(getProductsFormState, (state: ProductsFormState) => state.isAddEditMode)
