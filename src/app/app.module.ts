import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ListComponent } from './list.component';
import { DataService } from './data.service';
import { OtherDataService } from './other-data.service';

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
    {provide: DataService, useClass: OtherDataService}
    ],
  bootstrap: [ListComponent]
})
export class AppModule {
}
