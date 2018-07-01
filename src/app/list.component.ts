import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { LogDebugger } from './log-debugger.service';

// All the components and pipes now must be 
// declared via an NgModule since 2.0.0-rc.6
// https://github.com/angular/angular/blob/master/CHANGELOG.md

@Component({
  modeuleId: module.id,
  selector: 'list-component',
  template: `
    <ul>
      <li *ngFor="let item of items">
        {{item.id}}: {{item.name}} lives in {{item.country}}
      </li>  
    </ul>
  `,
  providers: [
    DataService,
    {
      provide: LogDebugger,
      useFactory: () => {
        return new LogDebugger(true);
      }
    }
  ]
})
export class ListComponent implements OnInit {
  
  items:Array<any>;

  
  constructor(private dataService: DataService, private logDebugger: LogDebugger) {}

  ngOnInit() {
    this.logDebugger.debug('Getting items...')
    this.items = this.dataService.getItems();
  }

}