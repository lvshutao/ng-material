import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// material UI animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { svgResources } from '../utils/svg.util';

import { SharedModule } from '../shared/shared.module';

import 'rxjs/add/operator/take';

const COMPONENTS = [
  HeaderComponent, FooterComponent, SidebarComponent
];

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class CoreModule {
  // @Optional 模块是可选的
  // @SkipSelf 只在父类中查找依赖
  // 只会在应用启动时加载一次
  constructor( @Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry, ds: DomSanitizer) {
    if (parent) {
      throw new Error('Core 模块只能加载一次，不能再次加载');
    }
    svgResources(ir, ds);
  }
}

// 哪些资源需要作为 core 处理
// 最主要: 在系统中只需要加载一次的服务
// 主要用在 app.module 中
