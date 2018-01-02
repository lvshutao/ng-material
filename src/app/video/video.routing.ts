import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import {VideoIndexComponent} from './video-index/video-index.component';
import {ProjectListComponent} from './project/project-list/project-list.component';
import {TaskHomeComponent} from './task/task-home/task-home.component';

const routes: Routes = [
  {path: 'video', component: VideoIndexComponent},
  {path: 'v-project', component: ProjectListComponent},
  {path: 'v-task', component: TaskHomeComponent},
];

export const VideoRouting = RouterModule.forChild(routes);
