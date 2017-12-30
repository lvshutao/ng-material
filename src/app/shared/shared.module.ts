import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule
} from '@angular/material';

const MODULES = [
  CommonModule,
  HttpClientModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  FormsModule, ReactiveFormsModule
];

@NgModule({
  imports: [...MODULES],
  // 共享模块最主要的功能
  exports: [...MODULES],
  declarations: []
})
export class SharedModule {
}

// 哪些资源需要作为 shared 处理？
// 把其它模块需要使用到的模块导进来，然后再导出去
// 不需要用在 app.module 中，用在特性模块中
