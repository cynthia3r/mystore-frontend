import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../../models/Product';
import { Customer } from '../../models/Customer';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: CartItem[] = [];
  totalPrice: number = 0;
  customer: Customer;
  success: boolean = false;

  constructor(private cartService: CartService, private router: Router) {
    this.customer = {
      fullName: '',
      address: '',
      creditCardNumber: ''
    };
   }

  ngOnInit(): void {
    this.cart = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  removeItemFromCart(productId: number) {
    this.cartService.removeProduct(productId);
    this.cart = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  registerCustomerDetails(customer: Customer) {
    this.customer = customer;
    this.success = true;
    this.router.navigateByUrl(`confirmation/${this.customer.fullName}/${this.totalPrice}`);
  }

}
