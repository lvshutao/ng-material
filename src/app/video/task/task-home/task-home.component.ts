import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.css']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一：去星巴克买杯咖啡',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date()
        },
        {
          id: 1,
          desc: '任务一：去星巴克买杯咖啡',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '张三四',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
          reminder: new Date()
        }
      ]
    }, {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务一：去星巴克卖掉咖啡',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: '李四四',
            avatar: 'avatars:svg-10'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务一：去星巴克卖掉咖啡',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '李四四',
            avatar: 'avatars:svg-10'
          },
          dueDate: new Date()
        }
      ]
    }
  ];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openNewTaskDialog() {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      width: '400px',
      data: {
        title: '新建任务',
        task: null
      }
    });
    dialogRef.afterClosed().subscribe(result => {

    });

  }

  openCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {
      width: '400px',
      data: {
        lists: this.lists
      }
    });
  }

  openUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      width: '400px',
      data: {
        title: '修改任务',
        task: task
      }
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  openConfrimDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: '删除任务',
        content: '你确定要删除任务吗?'
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('删除任务', result);
    })
  }

  addTaskList() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: {
        title: '新增任务列表'
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('任务列表:', result);
    })
  }

  openEditTaskDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: {
        title: '修改列表名称'
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('修改:', result);
    });
  }

  handleMove(srcData, list) {
    switch (srcData.tag) {
      case 'task-item':
        console.log('handing item');
        break;
      case 'task-list':
        console.log('handing list');
        break;
      default:
        break;
    }
  }

  quickTask(desc) {
    console.log(desc);
  }
}
