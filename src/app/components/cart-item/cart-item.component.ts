import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../models/Product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;
  @Output() removeFromCart: EventEmitter<number> = new EventEmitter<number>();
  quantity = 1;

  constructor() {
    this.cartItem = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 1
    };
   }

  ngOnInit(): void {
    this.quantity = this.cartItem.quantity;
  }

  removeItemFromCart (): void {
    this.removeFromCart.emit(this.cartItem.id)
  }

}
