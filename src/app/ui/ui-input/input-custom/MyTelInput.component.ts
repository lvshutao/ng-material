import {Component, Input} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {MatFormFieldControl} from '@angular/material';

// 通知变化
import {OnDestroy, HostBinding} from '@angular/core';
import {Subject} from 'rxjs/Subject';

class MyTel {
  constructor(public area: string,
              public exchange: string,
              public subscriber: string) {
  }
}

/**
 * 错误集合
 * 1. Can't bind to 'formGroup' since it isn't a known property of 'div'
 * 没有导入 ReactiveFormsModule
 * 2. HostBinding is not defined
 * 3. Invalid providers for "MyTelInputComponent" - only instances of Provider and Type are allowed, got: [?[object Object]?]
 */
// https://material.angular.io/guide/creating-a-custom-form-field-control
// 太复杂了，以后再学习
// @Component({
//   selector: 'app-my-tel-input',
//   template: `
// <div [formGroup]="parts">
//   <input class="area" formControlName="area" size="3" >
//   <span>&ndash;</span>
//   <input class="exchange" fornControlName="exchange" size="3">
//   <span>&ndash;</span>
//   <input class="subscriber" formControlName="subscriber" size="4">
// </div>
//   `,
//   styles: [`
//   div {
//   display: flex;
// }
//
// input {
//   border: none;
//   background: none;
//   padding: 0;
//   outline: none;
//   font: inherit;
//   text-align: center;
// }
//   `],
//   providers: [
//     {provider: MatFormFieldControl, useExisting: MyTelInputComponent}
//   ]
// })
//
// // 继承 MatFormFieldControl，让组件能够在 <mat-form-field> 下工作
// // 同时也必须实现 MatFormFieldControl 的方法
// export class MyTelInputComponent implements MatFormFieldControl<MyTel>, OnDestroy {
//   static nextId = 0;
//   @HostBinding() id = `app-my-tel-input-${MyTelInputComponent.nextId++}`;
//   parts: FormGroup;
//
//   // ------ 1. value
//   // 允许读取和设置 control 的值，注意，它们的类型必须是继承时指定的类型,这里是 MyTel
//   @Input()
//   get value(): MyTel | null {
//     const n = this.parts.value;
//     if (n.area.length === 3 && n.exchange.length === 3 && n.subscriber.length === 4) {
//       return new MyTel(n.area, n.exchange, n.subscriber);
//     }
//     return null;
//   }
//
//   set value(tel: MyTel | null) {
//     tel = tel || new MyTel('', '', '');
//     this.parts.setValue({
//       area: tel.area,
//       exchange: tel.exchange,
//       subscriber: tel.subscriber
//     });
//     this.stateChanges.next(); // 变化
//   }
//
//   // ----- 2. stateChanges:
//   // 由于 <mat-form-field> 使用 `OnPush` 变化检测策略，因此我们必须让组件知道表单
//   // 发生什么变化 ，以便让 control 做出反应
//   stateChanges = new Subject<void>();
//
//   ngOnDestroy() {
//     this.stateChanges.complete();
//   }
//
//   // ---- 3. id
//   // 实现与 <mat-form-field> 的关联
//
//
//   constructor(fb: FormBuilder) {
//     this.parts = fb.group({
//       area: '',
//       exchange: '',
//       subscriber: ''
//     });
//   }
// }
