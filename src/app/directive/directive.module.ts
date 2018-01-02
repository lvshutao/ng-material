import { NgModule } from '@angular/core';
import { DragDirective } from './drag-drop/drag.directive';
import { DropDirective } from './drag-drop/drop.directive';
import { DragDropService } from './drag-drop.service';

const DIRECTIVES = [
  DragDirective, DropDirective
]
@NgModule({
  exports: [...DIRECTIVES],
  declarations: [...DIRECTIVES],
  providers: [DragDropService]
})
export class DirectiveModule { }
