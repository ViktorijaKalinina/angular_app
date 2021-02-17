import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroupState, ResetAction, SetValueAction } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { callAddProduct, callDeleteProduct, callEditProduct, callUpdateProduct, displayAddEditForm, hideAddEditForm } from './products-form.actions';
import { initialState, Products, ProductsFormModel } from './products-form.reducer';
import { getFormDisplayStatus, getProductsForm, getProductsFormList } from './products-form.selectors';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  formState$: Observable<FormGroupState<ProductsFormModel>>;
  products$: Observable<Products[]>;
  isFormDisplayed$: Observable<boolean>;
  displaySave: boolean = false;
  displayUpdate: boolean = false;

  constructor(private store: Store) {
    this.formState$ = store.select(getProductsForm);
   }

  ngOnInit(): void {
    this.products$ = this.store.select(getProductsFormList);
    this.isFormDisplayed$ = this.store.select(getFormDisplayStatus);
  }
  saveProduct() {
    this.store.dispatch(callAddProduct());
  }
  cancel() {
    this.store.dispatch(new SetValueAction(initialState.formState.id,initialState.formState.value));
    this.store.dispatch(new ResetAction(initialState.formState.id));
    this.store.dispatch(hideAddEditForm())
  }
  editProduct(id: number) {
    this.displaySave = false;
    this.displayUpdate = true;
    this.store.dispatch(callEditProduct({id}));
    this.store.dispatch(displayAddEditForm());
  }
  deleteProduct(id: number) {
    this.store.dispatch(callDeleteProduct({id}));
  }
  addNewItem() {
    this.displaySave = true;
    this.displayUpdate = false;
    this.store.dispatch(displayAddEditForm());
  }
  updateProduct() {
    this.store.dispatch(callUpdateProduct());
  }
}
