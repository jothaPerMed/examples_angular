import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { PagesModule } from './pages/pages.module';
import { MaterialModule } from './material/material.module';
import { PagesRoutingModule } from './pages/pages-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    PagesModule,
    MaterialModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
