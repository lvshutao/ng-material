import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
  // {path: '', redirectTo: 'ui', pathMatch: 'full'},
  {path: '', component: IndexComponent},
];

export const AppRouting = RouterModule.forRoot(routes);
