import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imageLogo = '/assets/img/logo-diversas.png'

  constructor() { }

  ngOnInit(): void {
  }

}
