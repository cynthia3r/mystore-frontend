import { Injectable } from '@angular/core';
import { Product, CartItem } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartItem[] = [];

  getCartItems(): CartItem[] {
    return this.cart;
  }

  addProduct(product: Product, quantity: number): void {
    const itemInCart:CartItem | undefined = this.cart.find(({id}) => id === product.id);

    if(!itemInCart) {
      this.cart.push({
        ...product,
        quantity
      });
    } else {
      const itemInCartIndex: number = this.cart.indexOf(itemInCart);
      const updatedItem: CartItem = {
        ...itemInCart,
        quantity: itemInCart.quantity + quantity
      };
      this.cart.splice(itemInCartIndex, 1, updatedItem);

    }
    alert("Product added to cart!");
  }

  removeProduct(productId: number): void {
    this.cart = this.cart.filter(({id}) => id!== productId);
    alert("Product removed from cart!");
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    this.cart.forEach(({ price, quantity }) => {
      totalPrice += price* quantity;
    });
    return totalPrice;
  }

  constructor() { }
}
