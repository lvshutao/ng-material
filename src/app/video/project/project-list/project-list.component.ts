import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ProjectNewComponent} from '../project-new/project-new.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects = [
    {name: '企业协作平台', desc: '这是一个企业内部项目', coverImg: 'assets/img/covers/0.jpg'},
    {name: '企业协作平台', desc: '这是一个企业内部项目', coverImg: 'assets/img/covers/1.jpg'}
  ];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(ProjectNewComponent, {
      width: '400px',
      data: {name: 'new name', desc: 'new desc'}
    });

    dialogRef.afterClosed().subscribe(response => {
      console.log('response:', response);
    });
  }

}
