import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {

  title: string = '';

  constructor(// 需要接收数据
    @Inject(MAT_DIALOG_DATA) private data,
    // 需要往回传送数据
    private diaRef: MatDialogRef<ProjectNewComponent>) {

  }

  ngOnInit() {
    this.title = this.data.title;
  }

  enter() {
    this.diaRef.close('I received your message.');
  }

}
