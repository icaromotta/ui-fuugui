
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, delay, map } from 'rxjs/operators';

import { Product } from '../models/product.model';
import { ProductInterfaces } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly API = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<ProductInterfaces[]>(`${this.API}/`)
  }
}
