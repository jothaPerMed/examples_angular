import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { Error404PageComponent } from './error404-page/error404-page.component';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    Error404PageComponent

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
     MaterialModule],
     exports:[PagesRoutingModule]
})
export class PagesModule {}
