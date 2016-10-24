import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Car, environment } from './app/';
import { Engine } from './app/engine'
import { Doors } from './app/doors'

if (environment.production) {
  enableProdMode();
}

function main() {
  let engine = new Engine();
  let doors = new Doors();
  let car = new Car(engine, doors);

  car.startEngine();
}

main();
// bootstrap(Car);
