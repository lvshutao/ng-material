import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import {VideoIndexComponent} from './video-index/video-index.component';
import {ProjectListComponent} from './project/project-list/project-list.component';

const routes: Routes = [
  {path: 'video', component: VideoIndexComponent},
  {path: 'v-project', component: ProjectListComponent},
];

export const VideoRouting = RouterModule.forChild(routes);
