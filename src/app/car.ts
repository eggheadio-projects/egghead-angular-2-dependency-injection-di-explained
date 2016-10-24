import { Component } from '@angular/core';
import { Engine } from './engine';
import { Doors } from './doors';

export class Car {
  
  constructor(private engine: Engine, private doors: Doors) {}

  startEngine(){
    this.engine.start()
  }
}
