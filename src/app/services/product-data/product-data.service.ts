import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    console.log('inside product service');
    return this.http.get<Product[]>("../../assets/data.json");
  }
}
