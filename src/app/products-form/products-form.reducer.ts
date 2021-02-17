import { createReducer, on } from '@ngrx/store';
import { createFormGroupState, FormGroupState, onNgrxForms } from 'ngrx-forms';
import { addProductSuccess, deleteProductSuccess, editProductSuccess, hideAddEditForm, displayAddEditForm, updateProductSuccess } from './products-form.actions';


export const productsFormKey = 'productsForm';

export interface Products {
  id: number,
  title: string
}

export interface ProductsFormModel{
  id: number,
  title: string
}

export interface ProductsFormState {
  list: Products[],
  formState: FormGroupState<ProductsFormModel>,
  isAddEditMode: boolean
}

export const initialState: ProductsFormState = {
  list: [
    {id: 1, title: 'Item 1'},
    {id: 2, title: 'Item 2'},
    {id: 3, title: 'Item 3'},
    {id: 4, title: 'Item 4'},
    {id: 5, title: 'Item 5'},
  ],
  formState: createFormGroupState<ProductsFormModel>(productsFormKey, {
    id: null,
    title: ''
  }),
  isAddEditMode: false
};

export const productsFormReducer = createReducer(
  initialState,
  onNgrxForms(),
  on(addProductSuccess, (state, props) => ({
    ...state,
    list: [...state.list, {id: Math.random(), title: props.result}]
  })),
  on(deleteProductSuccess, (state, props) => ({
    ...state,
    list: props.list
  })),
  on(updateProductSuccess, (state, props) => ({
    ...state,
    list: props.list
  })),
  on(hideAddEditForm, (state) => ({
    ...state,
    isAddEditMode: false
  })),
  on(displayAddEditForm, (state) => ({
    ...state,
    isAddEditMode: true
  }))
  )
