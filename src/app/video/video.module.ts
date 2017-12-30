import {NgModule} from '@angular/core';
import {VideoIndexComponent} from './video-index/video-index.component';
import {SharedModule} from '../shared/shared.module';
import {VideoRouting} from './video.routing';

import {ProjectListComponent} from './project/project-list/project-list.component';
import {ProjectItemComponent} from './project/project-item/project-item.component';
import {InviteComponent} from './project/invite/invite.component';
import {ProjectNewComponent} from './project/project-new/project-new.component';

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
    ProjectNewComponent
  ],
  entryComponents: [ProjectNewComponent]
})
export class VideoModule {
}
