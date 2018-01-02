import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.css']
})
export class TaskHeaderComponent implements OnInit {

  @Input() header = '';
  @Output() newTask = new EventEmitter<void>();
  @Output() moveClick = new EventEmitter<void>();
  @Output() editClick = new EventEmitter<void>();
  @Output() deleteClick = new EventEmitter<void>();


  constructor() {
  }

  ngOnInit() {
  }

  onNewTask() {
    this.newTask.emit();
  }

  onEditClick() {
    this.editClick.emit();
  }

  onMoveClick() {
    this.moveClick.emit();
  }

  onDeleteClick() {
    this.deleteClick.emit();
  }

}
