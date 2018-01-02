import { Component, OnInit, HostBinding, HostListener, ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectNewComponent } from '../project-new/project-new.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { slideToRight } from '../../../animates/router.anim';
import { listAnimation } from '../../../animates/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  animations: [slideToRight, listAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProjectListComponent implements OnInit {
  projects = [
    { id: 1, name: '企业协作平台', desc: '这是一个企业内部项目', coverImg: 'assets/img/covers/0.jpg' },
    { id: 2, name: '企业协作平台', desc: '这是一个企业内部项目', coverImg: 'assets/img/covers/1.jpg' }
  ];

  @HostBinding('@routeAdmin') state;

  constructor(private dialog: MatDialog, private cd:ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(ProjectNewComponent, {
      width: '400px',
      data: {
        title: '新建项目',
        name: 'new name',
        desc: 'new desc'
      }
    });

    dialogRef.afterClosed().subscribe(response => {
      console.log('response:', response);
      this.projects = [...this.projects, { id: 3, name: '新的项目', desc: '这是一个全新的项目', coverImg: 'assets/img/covers/3.jpg' }, { id: 4, name: '新的项目', desc: '这是一个全新的项目', coverImg: 'assets/img/covers/4.jpg' }, { id: 5, name: '新的项目', desc: '这是一个全新的项目', coverImg: 'assets/img/covers/5.jpg' }]

      this.cd.markForCheck();
    });
  }

  whenEditClick() {
    const dialogRef = this.dialog.open(ProjectNewComponent, {
      width: '400px',
      data: {
        title: '编辑项目',
        name: 'new name',
        desc: 'new desc'
      }
    });

    dialogRef.afterClosed().subscribe(response => {
      console.log('response:', response);
    });
  }
  whenInviteClick() { }
  whenDeleteClick(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: '删除项目',
        content: '你确定要删除项目吗?'
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = this.projects.filter(p => p.id != project.id);
      this.cd.markForCheck();
    })
  }

}
