import * as fromProductsForm from './products-form.actions';

describe('loadProductsForms', () => {
  it('should return an action', () => {
    expect(fromProductsForm.loadProductsForms().type).toBe('[ProductsForm] Load ProductsForms');
  });
});
