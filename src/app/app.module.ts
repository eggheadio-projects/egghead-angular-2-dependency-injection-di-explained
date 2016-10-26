import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ListComponent } from './list.component';
import { DataService } from './data.service';
import { LogDebugger } from './log-debugger.service';

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
    {
      provide: LogDebugger,
      useFactory: () => {
        return new LogDebugger(true);
      }
    }
    ],
  bootstrap: [ListComponent]
})
export class AppModule {
}
