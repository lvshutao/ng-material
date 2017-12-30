import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { VideoIndexComponent } from "./video-index/video-index.component";

const routes: Routes = [
    { path: 'video', component: VideoIndexComponent }
]

export const VideoRouting = RouterModule.forChild(routes);