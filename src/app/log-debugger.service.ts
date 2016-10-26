import { Injectable } from '@angular/core';
import { ConsoleService } from './console.service';

@Injectable()
export class LogDebugger {
  constructor(private ConsoleService, private enabled: boolean) {}

  debug(message) {
    if (this.enabled) {
      this.ConsoleService.log(`DEBUG: ${message}`);
    }
  }
}
