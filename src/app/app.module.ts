import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRouting } from './app.routing';
import { UiModule } from './ui/ui.module';

import { MatSidenavModule } from '@angular/material';
import { IndexComponent } from './index/index.component';
import { MdModule } from './md/md.module';
import { VideoModule } from './video/video.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MatSidenavModule,
    AppRouting,
    UiModule, MdModule, VideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
