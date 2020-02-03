import { Observable } from 'rxjs';
import { CartService } from './../../services/cart.service';
import { Component, OnInit, Input } from '@angular/core';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: any;
  productCounter = 0
  cart = []
  cart$: Observable<any>

  constructor(private cartService: CartService) { }

  ngOnInit() {

    console.log(this.product)

  }

  addItemToCart(product: any) {

    this.productCounter++

    let item = {
      userId: '5e347394010c38215f84709a',
      productName: product.name,
      productId: product._id,
      amount: this.productCounter,
      price: product.price,
    }

    this.cartService.upSertCart(item)
      .subscribe((result) => {
        console.log(result)
      }, (err) => {
        Swal.fire('Oops...', err.error.message, 'error')
      })
  }

  removeItemToCart() {

    if (this.productCounter != 0) {
      return this.productCounter--;
    }
  }
}
