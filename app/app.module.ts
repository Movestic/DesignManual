import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NavigationComponent } from './navigation/navigation.component';
import { AppComponent }  from './app.component';
import { routing } from "./app.routing";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }