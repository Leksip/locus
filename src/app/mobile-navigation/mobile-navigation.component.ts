import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.scss']
})
export class MobileNavigationComponent implements OnInit {
  @Input() isActive: boolean = false
  @Output() closeMenu: EventEmitter<any> = new EventEmitter<any>()

  constructor() {
  }

  ngOnInit(): void {
  }

  onCloseMenu() {
    this.closeMenu.emit()// сообщаем в header что событие произошло
  }
}
