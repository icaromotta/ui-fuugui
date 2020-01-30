import { Observable } from 'rxjs';
import { CartService } from './../../services/cart.service';
import { Component, OnInit, Input } from '@angular/core';

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

  addItemToCart(product) {

    this.productCounter++

    let item = {
      userId: '5e333827b61bd50d63ad67f7',
      productName: product.name,
      productId: product._id,
      amount: this.productCounter,
      // price: product.price,
    }

    this.cartService.upSertCart(item)
      .subscribe((result) => {
        console.log(result)
      })
  }

  removeItemToCart() {

    if (this.productCounter != 0) {
      return this.productCounter--;
    }
  }
}
