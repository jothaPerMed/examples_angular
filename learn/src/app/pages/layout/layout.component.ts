import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  public isLoading: boolean = false;
  public statusMenu = false;
  public messageMenu = 'Open Menu';
  public currentPage = '';

  toogleMenu() {
    // Your code here
    this.statusMenu = this.statusMenu ? false : true;
    this.messageMenu =
    this.messageMenu == 'Open Menu' ? 'Close Menu' : 'Open Menu';
  }

  toHomePage() {
    this.currentPage = 'home';
  }
  toProductosPage() {
    this.currentPage = 'productos';
  }
  toogleLoading() {
    setTimeout(() => {
      this.isLoading = !this.isLoading ? true : false;
    }, 1000);
    this.isLoading = !this.isLoading ? true : false;
  }
}
