import {Routes, RouterModule} from '@angular/router';
import {UiComponent} from './ui/ui.component';
import {UiIconComponent} from './ui-icon/ui-icon.component';
import {UiInputComponent} from './ui-input/index/ui-input.component';
import {UiCardComponent} from './ui-card/ui-card.component';
import {UiButtonComponent} from './ui-button/ui-button.component';
import {UiListComponent} from './ui-list/ui-list.component';
import {UiGridListComponent} from './ui-grid-list/ui-grid-list.component';
import {UiDialogComponent} from './ui-dialog/index/ui-dialog.component';
import {UiMenuComponent} from './ui-menu/ui-menu.component';
import {UiTooltipComponent} from './ui-tooltip/ui-tooltip.component';
import {UiDatepickerComponent} from './ui-datepicker/ui-datepicker.component';
import {UiRadioButtonComponent} from './ui-radio-button/ui-radio-button.component';
import {UiSelectComponent} from './ui-select/ui-select.component';
import { UiCheckboxComponent } from './ui-checkbox/ui-checkbox.component';

const routes: Routes = [
  {path: 'ui', component: UiComponent},
  {path: 'ui-icon', component: UiIconComponent},
  {
    path: 'ui-input', component: UiInputComponent, children: []
  },
  {path: 'ui-card', component: UiCardComponent},
  {path: 'ui-button', component: UiButtonComponent},
  {path: 'ui-list', component: UiListComponent},
  {path: 'ui-grid-list', component: UiGridListComponent},
  {path: 'ui-dialog', component: UiDialogComponent},
  {path: 'ui-menu', component: UiMenuComponent},
  {path: 'ui-tooltip', component: UiTooltipComponent},
  {path: 'ui-datepicker', component: UiDatepickerComponent},
  {path: 'ui-radio', component: UiRadioButtonComponent},
  {path: 'ui-select', component: UiSelectComponent},
  {path: 'ui-checkbox', component: UiCheckboxComponent},

];

export const UiRouting = RouterModule.forChild(routes);
