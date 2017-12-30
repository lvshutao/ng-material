import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {UiRouting} from './ui.routing';

import {UiComponent} from './ui/ui.component';
import {UiIconComponent} from './ui-icon/ui-icon.component';
import {UiInputComponent} from './ui-input/index/ui-input.component';
import {InputLoginComponent} from './ui-input/input-login/input-login.component';
import { UiCardComponent } from './ui-card/ui-card.component';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiListComponent } from './ui-list/ui-list.component';

@NgModule({
  imports: [
    SharedModule,
    UiRouting
  ],
  declarations: [
    UiComponent,
    UiIconComponent,
    UiInputComponent,
    InputLoginComponent,
    UiCardComponent,
    UiButtonComponent,
    UiListComponent
  ]
})
export class UiModule {
}
