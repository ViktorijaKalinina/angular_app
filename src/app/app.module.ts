import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { appReducer } from './_store';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
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
    !environment.production ? StoreDevtoolsModule.instrument():[]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
