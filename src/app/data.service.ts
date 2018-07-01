import { LogDebugger } from './log-debugger.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Inject } from '@angular/core';
import { API_URL } from './app.tokens';

@Injectable()
export class DataService {

  apiUrl = 'http://localhost:4200/api';

  constructor(private logDebugger: LogDebugger, private http: http, @Inject(API_URL) private apiUrl) { }

  getItems() {
    this.logDebugger.debug('Getting items...');
    return this.http.get(`${this.apiUrl}/items`)
      .map(res => res.json())
      .map(data => data.items);
  }

}
