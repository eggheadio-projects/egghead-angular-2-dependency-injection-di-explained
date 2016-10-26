import { Component } from '@angular/core';
import { EngineService } from './engine.service';

// All the components and pipes now must be 
// declared via an NgModule since 2.0.0-rc.6
// https://github.com/angular/angular/blob/master/CHANGELOG.md

@Component({
  selector: 'app-car',
  template: `<div>

  {{engine.rumble}}
  
</div>`
})
export class AppComponent {
  
  constructor(private engine: EngineService) {}
  
}