import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { LoadingComponent } from './loading/loading.component';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDivider } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    Error404PageComponent,
    LoadingComponent,
    ProductoComponent
    
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    MatMenu,
    MatIcon,
    MatSidenavModule, 
    MatButtonModule,
    MatDivider, 
    MatCardModule,
    MatButtonModule

  ],
  exports: [
    HomeComponent,
    LayoutComponent,
    Error404PageComponent,
    LoadingComponent,
    ProductoComponent
  ]
})
export class PagesModule {}
