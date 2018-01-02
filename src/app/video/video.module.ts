import { NgModule } from '@angular/core';
import { VideoIndexComponent } from './video-index/video-index.component';
import { SharedModule } from '../shared/shared.module';
import { VideoRouting } from './video.routing';

import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectItemComponent } from './project/project-item/project-item.component';
import { InviteComponent } from './project/invite/invite.component';
import { ProjectNewComponent } from './project/project-new/project-new.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskItemComponent } from './task/task-item/task-item.component';
import { TaskHomeComponent } from './task/task-home/task-home.component';
import { TaskHeaderComponent } from './task/task-header/task-header.component';
import { NewTaskComponent } from './task/new-task/new-task.component';
import { CopyTaskComponent } from './task/copy-task/copy-task.component';
import { NewTaskListComponent } from './task/new-task-list/new-task-list.component';
import { QuickTaskComponent } from './task/quick-task/quick-task.component';

@NgModule({
  imports: [
    SharedModule,
    VideoRouting
  ],
  declarations: [
    VideoIndexComponent,
    ProjectItemComponent,
    ProjectListComponent,
    InviteComponent,
    ProjectNewComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskHomeComponent,
    TaskHeaderComponent,
    NewTaskComponent,
    CopyTaskComponent,
    NewTaskListComponent,
    QuickTaskComponent
  ],
  entryComponents: [
    ProjectNewComponent, 
    NewTaskComponent, 
    CopyTaskComponent,
    NewTaskListComponent
  ]
})
export class VideoModule {
}
