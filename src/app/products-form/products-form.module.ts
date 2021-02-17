import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { NgrxFormsModule } from 'ngrx-forms';
import { ProductsFormEffects } from './products-form.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ProductsFormEffects])
  ]
})
export class ProductsFormModule { }
