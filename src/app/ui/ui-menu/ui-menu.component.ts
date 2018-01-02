import {Component, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-ui-menu',
  templateUrl: './ui-menu.component.html',
  styleUrls: ['./ui-menu.component.css']
})
export class UiMenuComponent implements OnInit {

  @ViewChild(MatMenuTrigger) appMenu: MatMenuTrigger;

  constructor() {
  }

  ngOnInit() {
  }


  openMenu() {
    this.appMenu.openMenu();
  }
}
