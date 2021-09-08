import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/Product';
import { ProductDataService } from 'src/app/services/product-data/product-data.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: Product;
  productId: number = 0;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productDataService: ProductDataService,
    private cartService: CartService) {
      this.product = {
        id: 0,
        name:  '',
        price: 0,
        url: '',
        description: ''
      };
    }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));
    })

    this.productDataService.getProducts().subscribe((res: Product[]) => {
      this.product =res.filter(({id}) => id === this.productId)[0];
    });
  }

  addToCart():void {
    this.cartService.addProduct(this.product, this.quantity);
  }

}
