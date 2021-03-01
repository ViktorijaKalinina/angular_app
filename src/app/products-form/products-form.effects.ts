import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { addProductSuccess, callAddProduct, callDeleteProduct, callEditProduct, callUpdateProduct, deleteProductSuccess, displayAddEditForm, editProductSuccess, hideAddEditForm, updateProductSuccess, } from './products-form.actions';
import { catchError, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { getProductsForm, getProductsFormList, getSelectedProduct } from './products-form.selectors';
import { initialState, Products, productsFormKey } from './products-form.reducer';
import { ResetAction, SetValueAction } from 'ngrx-forms';

@Injectable()
export class ProductsFormEffects {

  public callAddProduct$ = createEffect(() => this.actions$.pipe(
    ofType(callAddProduct),
    withLatestFrom(this.store.select(getProductsForm)),
    map(([props, product]) => {
      const data: Products = {
        title: product.controls.title.value,
        age: product.controls.age.value,
        email: product.controls.email.value,
        profession: product.controls.profession.value
      }
      return addProductSuccess({result: data})},
    catchError(() => EMPTY)
    )
  ));

  public addProductSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(addProductSuccess),
    switchMap(() => of(hideAddEditForm()))
  ))

  public callDeleteProduct$ = createEffect(() => this.actions$.pipe(
    ofType(callDeleteProduct),
    withLatestFrom(this.store.select(getProductsFormList)),
    map(([props, itemsList]) => {
      const items: Products[] = itemsList.filter((item) => {return item.id !== props.id})
      return deleteProductSuccess({list: items})
    })
  ));

  public callEditProduct$ = createEffect(() => this.actions$.pipe(
    ofType(callEditProduct),
    switchMap((action) => {
      return this.store.select(getSelectedProduct(action.id)).pipe(
        map((item) => new SetValueAction(productsFormKey,item))
      )
    })
  ));

  public callUpdateProduct$ = createEffect(() => this.actions$.pipe(
    ofType(callUpdateProduct),
    withLatestFrom(this.store.select(getProductsForm),this.store.select(getProductsFormList)),
    map(([props, product, itemsList]) => {
      const elementIndex = itemsList.findIndex(item => item.id === product.value.id);
      let newArray = [...itemsList];
      newArray[elementIndex] = {...newArray[elementIndex], title: product.value.title, email: product.value.email, age: product.value.age}

      return updateProductSuccess({list: newArray})
    })
  ));

  public updateProductSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(updateProductSuccess),
    switchMap(() => of(
      new SetValueAction(productsFormKey,initialState.formState.value),
      new ResetAction(productsFormKey),
      hideAddEditForm()
    ))
  ))

  constructor(private actions$: Actions,
              private store: Store) {}
}
