import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app';
import { Engine } from './app/engine/engine.component'
import { AppComponent } from './app/app.component'

if (environment.production) {
  enableProdMode();
}
function main () {
  let engine = new Engine();
  let car = new AppComponent(engine);

  car.startEngine();
}

main();
// platformBrowserDynamic().bootstrapModule(AppModule);
