// 支持 Svg
// 同时解决资源分散的问题
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

export const svgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon('cart', ds.bypassSecurityTrustResourceUrl('assets/cart.svg'));

  const imgDir = 'assets/img/';
  // 侧边栏图标
  const sidebarDir = `${imgDir}sidebar/`;
  ['day', 'month', 'project', 'projects', 'week'].forEach(name => {
    ir.addSvgIcon(name, ds.bypassSecurityTrustResourceUrl(`${sidebarDir}${name}.svg`));
  });
  // 日期小图标
  const dayDir = `${imgDir}days/`;
  for (let i = 1; i <= 31; i++) {
    ir.addSvgIcon(`day${i}`, ds.bypassSecurityTrustResourceUrl(`${dayDir}day${i}.svg`));
  }
  // 图像，导入的是 svg 集合文件
  const avatarDir = `${imgDir}avatar/`;
  ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarDir}avatars.svg`));
  ir.addSvgIcon('unassigned', ds.bypassSecurityTrustResourceUrl(`${avatarDir}unassigned.svg`));
  // icons
  const iconsDir = `${imgDir}icons/`;
  ['add', 'burger-navigation', 'delete', 'hand-grab-o', 'move'].forEach(name => {
    ir.addSvgIcon(name, ds.bypassSecurityTrustResourceUrl(`${iconsDir}${name}.svg`));
  });
};
