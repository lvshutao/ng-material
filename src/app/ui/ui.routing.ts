import { Routes, RouterModule } from '@angular/router';
import { UiComponent } from './ui/ui.component';
import { UiIconComponent } from './ui-icon/ui-icon.component';
import { UiInputComponent } from './ui-input/index/ui-input.component';
import { UiCardComponent } from './ui-card/ui-card.component';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiListComponent } from './ui-list/ui-list.component';
import { UiGridListComponent } from './ui-grid-list/ui-grid-list.component';
import { UiDialogComponent } from './ui-dialog/index/ui-dialog.component';

const routes: Routes = [
  { path: 'ui', component: UiComponent },
  { path: 'ui-icon', component: UiIconComponent },
  {
    path: 'ui-input', component: UiInputComponent, children: [
    ]
  },
  { path: 'ui-card', component: UiCardComponent },
  { path: 'ui-button', component: UiButtonComponent },
  { path: 'ui-list', component: UiListComponent },
  { path: 'ui-grid-list', component: UiGridListComponent },
  { path: 'ui-dialog', component: UiDialogComponent }
];

export const UiRouting = RouterModule.forChild(routes);
