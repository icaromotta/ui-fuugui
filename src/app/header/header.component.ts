import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() selectedCategory = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  getProductsByCategory(categoryM: string) {

    console.log(categoryM);
    
    this.selectedCategory.emit(categoryM);
  }
}
