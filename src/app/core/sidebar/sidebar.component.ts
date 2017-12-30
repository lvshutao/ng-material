import { Component, OnInit } from '@angular/core';
import { getDate } from 'date-fns';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menus = [
    {
      subheader: 'Components', items: [
        { title: 'Icon', link: 'ui-icon' },
        { title: 'Input', link: 'ui-input' },
        { title: 'Card', link: 'ui-card' },
        { title: 'Button', link: 'ui-button' },
        { title: 'List', link: 'ui-list' },
        { title: 'GridList', link: 'ui-grid-list' },
        { title: 'Dialog', link: 'ui-dialog' },
      ]
    }, {
      subheader: 'Material Design', items: [
        { title: 'css', link: 'md' }
      ]
    }
  ]

  today = 'day';

  constructor() { }

  ngOnInit() {
    this.today = `day${getDate(new Date())}`
  }

}
