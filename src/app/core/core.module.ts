import {NgModule, SkipSelf, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material';


const COMPONENTS = [
  HeaderComponent, FooterComponent, SidebarComponent
];

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class CoreModule {
  // @Optional 模块是可选的
  // @SkipSelf 只在父类中查找依赖
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('Core 模块只能加载一次，不能再次加载');

    }
  }
}

// 哪些资源需要作为 core 处理
// 最主要: 在系统中只需要加载一次的服务
// 主要用在 app.module 中
