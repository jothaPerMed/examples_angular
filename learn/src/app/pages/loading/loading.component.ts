import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnInit {
  ngOnInit(): void {
    this.runStyle()
  }
  style: string = "width: %";
  numero = 0;

  runStyle() {
    while (this.numero != 100) {
        console.log(this.style)
        this.style = "width:" + this.numero + "%;"
        this.numero++;

    }


  }

}

