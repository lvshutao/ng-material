import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.css']
})
export class NewTaskListComponent implements OnInit {

  title: string = ''
  content: string = '';

  constructor( @Inject(MAT_DIALOG_DATA) private data,
    private dialog: MatDialogRef<NewTaskComponent>) { }

  ngOnInit() {
    this.title = this.data.title;
  }

  save() {
    this.dialog.close({
      title: this.title,
      content: this.content
    })
  }

}
