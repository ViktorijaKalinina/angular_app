import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { insertNewItem } from './products.actions';
import { Products } from './products.reducer';
import { getProductsList } from './products.selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Products[]>;
  newItemTitle: string = '';
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.products$ = this.store.select(getProductsList);
  }

  addNewItem() {
    this.store.dispatch(insertNewItem({title: this.newItemTitle}))
    this.newItemTitle = '';
  }
}
