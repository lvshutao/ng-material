import { NgModule } from '@angular/core';
import { VideoIndexComponent } from './video-index/video-index.component';
import { SharedModule } from '../shared/shared.module';
import { VideoRouting } from './video.routing';

@NgModule({
  imports: [
    SharedModule,
    VideoRouting
  ],
  declarations: [VideoIndexComponent]
})
export class VideoModule { }
