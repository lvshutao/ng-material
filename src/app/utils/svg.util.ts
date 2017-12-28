// 支持 Svg
// 同时解决资源分散的问题
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

export const svgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon('cart',
    ds.bypassSecurityTrustResourceUrl('assets/cart.svg')
  );
};
