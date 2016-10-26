import { Injectable } from '@angular/core';

@Injectable()
export class ConsoleService {

  log(message) {
    console.log(message);
  }
  
}
