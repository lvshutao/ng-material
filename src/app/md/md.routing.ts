import {Routes, RouterModule} from '@angular/router';
import {MdIndexComponent} from './md-index/md-index.component';

const routes: Routes = [
  {path: 'md', component: MdIndexComponent}
];

export const MdRouting = RouterModule.forChild(routes);
