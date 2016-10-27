import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ListComponent } from './list.component';
import { DataService } from './data.service';
import { LogDebugger } from './log-debugger.service';
import { ConsoleService } from './console.service';

// apiUrl is set to ./src/api to work in plunker

@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService,
    ConsoleService,
    {
      provide: LogDebugger,
      useFactory: (consoleService) => {
        return new LogDebugger(consoleService, true);
      },
      deps: [ConsoleService]
    },
    {
      provide: 'apiUrl',
      useValue: './src/api'
    }
    ],
  bootstrap: [ListComponent]
})
export class AppModule {
}
