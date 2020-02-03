import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap, delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly API = `${environment.API}users/add-item-cart`;

  constructor(private http: HttpClient) { }

  upSertCart(body) {

    return this.http.put<any>(`${this.API}`, body)
      .pipe(
        // tap(console.log)
      )
  }
}
