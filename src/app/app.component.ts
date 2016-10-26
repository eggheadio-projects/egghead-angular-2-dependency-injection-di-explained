import { Component } from '@angular/core';
import { Engine } from './engine/engine.component';

// @Component({
//   selector: 'app-root',
//   template: `<Engine></Engine>`
// })
export class AppComponent {
  
  constructor(private engine: Engine) {}

  startEngine(){
    this.engine.start()
  }
}