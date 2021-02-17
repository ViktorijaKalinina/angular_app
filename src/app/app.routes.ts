import { Routes } from "@angular/router";
import { ProductsFormComponent } from "./products-form/products-form.component";
import { ProductsComponent } from "./products/products.component";

export const routes: Routes = [
  {path: 'addToStore', component: ProductsComponent},
  {path: 'ngrxCrud', component: ProductsFormComponent},
  {path: '**', redirectTo: 'addToStore'}
]
