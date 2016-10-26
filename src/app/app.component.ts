import { Component } from '@angular/core';
import { EngineService } from './engine.service';

@Component({
  selector: 'app-car',
  template: `<div>

  {{engine.rumble}}
  
</div>`
})
export class AppComponent {
  
  constructor(private engine: EngineService) {}
  
}