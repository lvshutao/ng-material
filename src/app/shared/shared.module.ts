import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

const MODULES = [
  CommonModule
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
