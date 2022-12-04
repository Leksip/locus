import {Component, ContentChild, ElementRef, OnInit} from '@angular/core';

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
  body = document.body
  constructor() {
  }

  ngOnInit(): void {
  }

  openMenu() {
    this.isActive = true
    this.body.style.overflow = 'hidden'
  }

  closeMenu() {
    this.isActive = false
    this.body.style.overflow = ''
  }
}
