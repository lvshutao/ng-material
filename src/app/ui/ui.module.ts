import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UiRouting } from './ui.routing';

import { UiComponent } from './ui/ui.component';
import { UiIconComponent } from './ui-icon/ui-icon.component';
import { UiInputComponent } from './ui-input/index/ui-input.component';
import { InputLoginComponent } from './ui-input/input-login/input-login.component';
import { UiCardComponent } from './ui-card/ui-card.component';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiListComponent } from './ui-list/ui-list.component';
import { UiGridListComponent } from './ui-grid-list/ui-grid-list.component';
import { UiDialogComponent } from './ui-dialog/index/ui-dialog.component';
import { UiDialogDemoComponent } from './ui-dialog/demo/ui-dialog-demo.component';
import { UiDialogConfirmComponent } from './ui-dialog/confirm/ui-dialog-confirm.component';
import { UiMenuComponent } from './ui-menu/ui-menu.component';
import { UiTooltipComponent } from './ui-tooltip/ui-tooltip.component';
import { UiDatepickerComponent } from './ui-datepicker/ui-datepicker.component';
import { UiRadioButtonComponent } from './ui-radio-button/ui-radio-button.component';
import { UiSelectComponent } from './ui-select/ui-select.component';
import { UiCheckboxComponent } from './ui-checkbox/ui-checkbox.component';


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
    UiListComponent,
    UiGridListComponent,
    // dialog components
    UiDialogComponent,
    UiDialogDemoComponent,
    UiDialogConfirmComponent,
    // -------------------
    UiMenuComponent,
    UiTooltipComponent,
    UiDatepickerComponent,
    UiRadioButtonComponent,
    UiSelectComponent,
    UiCheckboxComponent
  ],
  // dialog component must set entryComponents
  entryComponents: [UiDialogConfirmComponent],
  providers: []
})
export class UiModule {
}
