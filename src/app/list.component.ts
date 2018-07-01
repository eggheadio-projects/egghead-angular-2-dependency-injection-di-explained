import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from './data.service';
import { LogDebugger } from './log-debugger.service';
import { ConsoleService } from './console.service'; 
import { THIRD_PARTY_PROVIDERS } from './third-party';
import { API_URL } from './app.tokens';

// All the components and pipes now must be 
// declared via an NgModule since 2.0.0-rc.6
// https://github.com/angular/angular/blob/master/CHANGELOG.md

@Component({
  moduleId: module.id,
  selector: 'list-component',
  template: `
    <ul>
      <li *ngFor="let item of items | async">
        {{item.id}}: {{item.name}} lives in {{item.country}}
      </li>  
    </ul>
  `,
  providers: [
    DataService,
    ConsoleService,
    {
      provide: LogDebugger,
      useFactory: (consoleService) => {
        return new LogDebugger(consoleService, true);
      },
      deps: [ConsoleService]
    },
    {
      provide: API_URL,
      useValue: 'http://localhost:4200/api'
    },
    THIRD_PARTY_PROVIDERS
  ]
})
export class ListComponent implements OnInit {

  items: Observable<Array<any>>;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.items = this.dataService.getItems();
  }

}