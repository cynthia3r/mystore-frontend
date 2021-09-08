import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  quantity: number = 1;

  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      name:  '',
      price: 0,
      url: '',
      description: ''
    }
  }

  ngOnInit(): void {
  }

  addToCart():void {
    this.cartService.addProduct(this.product, this.quantity);
  }

}
