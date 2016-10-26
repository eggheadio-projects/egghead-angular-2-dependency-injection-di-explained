import { Injectable } from '@angular/core';
import { LogDebugger } from './log-debugger.service';

@Injectable()
export class DataService {

  constructor(private logDebugger: LogDebugger) {}

  items:Array<any> = [
    { id: 0, name: 'Pascal Precht', country: 'Germany'},
    { id: 1, name: 'Christoph Burgdorf', country: 'Germany'},
    { id: 2, name: 'Thomas Burleson', country: 'United States'}
  ]
  
  getItems() {
    this.logDebugger.debug('Getting items...')
    return this.items;
  }

}
