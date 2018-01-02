import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatGridListModule,
  MatDialogModule,
  MatMenuModule, MatCheckboxModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS,
  MatRadioModule, MatSelectModule, MatSlideToggleModule
} from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DirectiveModule } from '../directive/directive.module';
import { ImageListSelectComponent } from './image-list-select/image-list-select.component';

const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  // mat module
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatGridListModule,
  MatDialogModule,
  MatMenuModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatSlideToggleModule,
  // ------ datepicker module -----
  MatDatepickerModule,
  MatNativeDateModule,
  // ------------------------
  MatRadioModule,
  MatSelectModule,
  DirectiveModule
];

@NgModule({
  imports: [...MODULES],
  // shared module's core function: import then export
  exports: [ImageListSelectComponent, ...MODULES],
  declarations: [ConfirmDialogComponent, ImageListSelectComponent],
  providers: [
    // datepicker date display locale
    { provide: MAT_DATE_LOCALE, useValue: 'zh-CN' }
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class SharedModule {
}

// 哪些资源需要作为 shared 处理？
// 把其它模块需要使用到的模块导进来，然后再导出去
// 不需要用在 app.module 中，用在特性模块中
