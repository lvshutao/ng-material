import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-list',
  templateUrl: './ui-list.component.html',
  styleUrls: ['./ui-list.component.css']
})
export class UiListComponent implements OnInit {

  typesOfShoes = ['Boots', 'Clogs', 'Loafers'];
  messages = [
    { from: 'Apple', subject: 'iphone', content: '这是一款新的手机' },
    { from: 'Android', subject: '华为', content: '这也是一款新的手机' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
