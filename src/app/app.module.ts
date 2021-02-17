import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { appReducer } from './_store';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsFormModule } from './products-form/products-form.module';
import { EffectsModule } from '@ngrx/effects';
import { NgrxFormsModule } from 'ngrx-forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(appReducer,{
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictActionTypeUniqueness: true
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument():[],
    EffectsModule.forRoot([]),
    RouterModule.forRoot(routes),
    NgrxFormsModule,
    ProductsFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
