import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapse(){
    this.show = !this.show;
  }

  onResize(){
    this.show = false;
  }

  show : boolean = false;

  constructor() {

  }

  ngOnInit(): void {
  }

}
