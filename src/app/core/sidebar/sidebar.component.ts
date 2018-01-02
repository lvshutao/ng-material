import {Component, OnInit} from '@angular/core';
import {getDate} from 'date-fns';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menus = [
    {
      subheader: 'FORM CONTROLS', items: [
        {title: 'Autocomplete *', link: 'ui-autocomplete'},
        {title: 'Checkbox', link: 'ui-checkbox'},
        {title: 'Datepicker', link: 'ui-datepicker'},
        {title: 'Form field *', link: 'ui-form-field'},
        {title: 'Input', link: 'ui-input'},
        {title: 'Radio button', link: 'ui-radio'},
        {title: 'Select', link: 'ui-select'},
        {title: 'Slider *', link: 'ui-slider'},
        {title: 'Slide toggle *', link: 'ui-slide-toggle'},
      ]
    }, {
      subheader: 'NAVIGATION', items: [
        {title: 'Menu', link: 'ui-menu'},
        {title: 'Sidenav *', link: 'ui-sidenav'},
        {title: 'Toolbar *', link: 'ui-toolbar'},
      ]
    }, {
      subheader: 'LAYOUT', items: [
        {title: 'List', link: 'ui-list'},
        {title: 'GridList', link: 'ui-grid-list'},
        {title: 'Card', link: 'ui-card'},
        {title: 'Stepper *', link: 'ui-stepper'},
        {title: 'Tabs *', link: 'ui-tabs'},
        {title: 'Expansion Panel *', link: 'ui-expansion-panel'},
      ]
    }, {
      subheader: 'BUTTONS & INDICATORS', items: [
        {title: 'Button', link: 'ui-button'},
        {title: '* Button toggle', link: 'ui-button-toggle'},
        {title: '* Chips', link: 'ui-chips'},
        {title: 'Icon', link: 'ui-icon'},
        {title: '* Progress spinner', link: 'ui-progress-spinner'},
        {title: '* Progress bar', link: 'ui-progress-bar'},
      ]
    }, {
      subheader: 'POPUPS & MODALS', items: [
        {title: 'Dialog', link: 'ui-dialog'},
        {title: 'Tooltip', link: 'ui-tooltip'},
        {title: '* Snackbar', link: 'ui-snackbar'},
      ]
    }, {
      subheader: 'DATA TABLE', items: [
        {title: '* Table', link: 'ui-table'},
        {title: '* Sort header', link: 'ui-sort-header'},
        {title: '* Paginator', link: 'ui-paginator'},
      ]
    }, {
      subheader: 'Material Design', items: [
        {title: 'css', link: 'md'}
      ]
    }
  ];

  today = 'day';

  constructor() {
  }

  ngOnInit() {
    this.today = `day${getDate(new Date())}`;
  }

}
