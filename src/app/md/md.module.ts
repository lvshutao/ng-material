import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdIndexComponent} from './md-index/md-index.component';
import {MdRouting} from './md.routing';

@NgModule({
  imports: [
    CommonModule,
    MdRouting
  ],
  declarations: [MdIndexComponent]
})
export class MdModule {
}
