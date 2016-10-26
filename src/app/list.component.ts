import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'list-component',
  template: `
    <ul>
      <li *ngFor="let item of items">
        {{item.id}}: {{item.name}} lives in {{item.country}}
      </li>  
    </ul>
  `
})
export class ListComponent implements OnInit {
  
  items:Array<any>;

  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.items = this.dataService.getItems();
  }

}