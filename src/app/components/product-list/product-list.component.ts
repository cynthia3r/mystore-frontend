import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductDataService } from '../../services/product-data/product-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productDataService : ProductDataService) { }

  ngOnInit(): void {
    this.productDataService.getProducts().subscribe((res: Product[]) => {
      this.products =res;
    });
  }

}
