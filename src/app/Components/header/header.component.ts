import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public myName: string;

  constructor() {
    this.myName = 'Luis Felipe Cadona Flòrez';

  }

  ngOnInit(): void {
  }

}
