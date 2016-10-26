import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ListComponent } from './list.component';
import { DataService } from './data.service';

// All the components and pipes now must be 
// declared via an NgModule since 2.0.0-rc.6
// https://github.com/angular/angular/blob/master/CHANGELOG.md

@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [ListComponent]
})
export class AppModule {
}
