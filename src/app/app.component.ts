import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'ui-fuugui';
  category: string

  ngOnInit() {
    
  }

receptor(selectedCategory) {
  
    this.category = selectedCategory
  }
}
