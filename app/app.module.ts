import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component'; /*Import class appComponent for app.component.js/ts*/

@NgModule({
  imports:      [ BrowserModule ], /*List de tous les modules*/
  declarations: [ AppComponent ], /*Liste de tous les composents grafiques*/
  bootstrap:    [ AppComponent ] /*Premier modula a charger*/
})
export class AppModule { }