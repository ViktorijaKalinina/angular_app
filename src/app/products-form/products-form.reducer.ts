import { createReducer, on } from '@ngrx/store';
import { createFormGroupState, disable, enable, FormGroupState, onNgrxForms, updateGroup, validate, wrapReducerWithFormStateUpdate } from 'ngrx-forms';
import { addProductSuccess, deleteProductSuccess, editProductSuccess, hideAddEditForm, displayAddEditForm, updateProductSuccess } from './products-form.actions';
import { email, greaterThan, greaterThanOrEqualTo, pattern, required } from 'ngrx-forms/validation';


export const productsFormKey = 'productsForm';

export interface Products {
  id?: number,
  title: string,
  email: string,
  age: number,
  profession: string
}

export interface ProductsFormModel{
  id: number,
  title: string,
  email: string,
  age: number,
  profession: string
}

export interface ProductsFormState {
  list: Products[],
  formState: FormGroupState<ProductsFormModel>,
  isAddEditMode: boolean
}

export const initialState: ProductsFormState = {
  list: [
    {id: 1, title: 'Item 1', email: 'item1@mail.com', age: 15, profession: ''},
    {id: 2, title: 'Item 2', email: 'item2@mail.com', age: 15, profession: ''},
    {id: 3, title: 'Item 3', email: 'item3@mail.com', age: 15, profession: ''},
    {id: 4, title: 'Item 4', email: 'item4@mail.com', age: 15, profession: ''},
    {id: 5, title: 'Item 5', email: 'item5@mail.com', age: 15, profession: ''},
  ],
  formState: createFormGroupState<ProductsFormModel>(productsFormKey, {
    id: null,
    title: null,
    email: null,
    age: null,
    profession: null
  }),
  isAddEditMode: false
};

const validateProductsForm = updateGroup<ProductsFormModel>({
  title: validate(required),
  email: validate(required, email),
  age: validate(required, greaterThanOrEqualTo(0)),
  profession: (state, parentState) => {
    if(parentState.value.age < 18) {
      return disable(state)
    }

    state = enable(state);
    return validate(state, pattern(/^[A-Za-z]+$/))
  }
})

const rawReducer = createReducer(
  initialState,
  onNgrxForms(),
  on(addProductSuccess, (state, props) => ({
    ...state,
    list: [...state.list, {id: Math.random(), title: props.result.title, email: props.result.email, age: props.result.age, profession: props.result.profession}]
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

export const productsFormReducer = wrapReducerWithFormStateUpdate(
  rawReducer,
  s => s.formState,
  validateProductsForm
  )
