export class LogDebugger { 

  constructor(private enabled: boolean) {}

  debug(message) {
    if (this.enabled) {
      console.log(`DEBUG: ${message}`);
    }
  }
}