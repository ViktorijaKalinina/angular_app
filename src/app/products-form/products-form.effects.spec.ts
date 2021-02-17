import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProductsFormEffects } from './products-form.effects';

describe('ProductsFormEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductsFormEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsFormEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ProductsFormEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
