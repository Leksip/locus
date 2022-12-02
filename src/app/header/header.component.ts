import {Component, OnInit} from '@angular/core';

class User {
  name

  constructor(name, secondName) {
    this.name = name
  }
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActive = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  openMenu() {
    this.isActive = true
  }

  closeMenu() {
    this.isActive = false
  }
}
