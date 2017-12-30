import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-grid-list',
  templateUrl: './ui-grid-list.component.html',
  styleUrls: ['./ui-grid-list.component.css']
})
export class UiGridListComponent implements OnInit {

  items: string[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 16; i++) {
      // svg-x 指的是 avatars 中每个 svg 的 id
      this.items.push(`avatars:svg-${i}`);
    }
  }

}
