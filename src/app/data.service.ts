import { Injectable, Inject} from '@angular/core';
import { LogDebugger } from './log-debugger.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {
 
  constructor(private logDebugger: LogDebugger, private http: Http, @Inject('apiUrl') private apiUrl) {}

  getItems() {
    this.logDebugger.debug('Getting items...');
    return this.http.get(`${this.apiUrl}/items.json`)
                    .map(res => res.json())
  }
}
