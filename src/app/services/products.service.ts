import { environment } from './../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, delay, map } from 'rxjs/operators';

import { ProductInterfaces } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly API = `${environment.API}products`;

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get<ProductInterfaces[]>(`${this.API}/`)
      .pipe(
        delay(1000),
        // tap(console.log)
      )
  }

  listByCategory(category) {
    return this.http.get<ProductInterfaces[]>(`${this.API}/by-category?category=${category}`)
      .pipe(
        // delay(1000),
        // tap(console.log)
      )
  }
}
