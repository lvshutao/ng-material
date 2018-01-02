import {Component, OnInit} from '@angular/core';

import {FormControl} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material';

@Component({
  selector: 'app-ui-datepicker',
  templateUrl: './ui-datepicker.component.html',
  styleUrls: ['./ui-datepicker.component.css']
})
export class UiDatepickerComponent implements OnInit {

  // datepicker 接受以下格式的日期
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());


  currentYear = (new Date()).getFullYear();
  currentMonth = (new Date()).getMonth();
// 验证日历
  minDate = new Date(this.currentYear, this.currentMonth - 1, 0);
  maxDate = new Date(this.currentYear + 1, 1, 15);

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  };

  // --------- 日历事件 ----
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
