import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';

@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.css'],
  providers: [
    // 等待 ImageListSelectComponent 实例化之后，再注入它
    // 因为我们需要将选择的结果通知到 formControlName="avatar" 的表单绑定上
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageListSelectComponent),
      // 允许其它注入器继续使用 NG_VALUE_ACCESSOR 这个 token
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ImageListSelectComponent),
      multi: true
    }
  ]
})
export class ImageListSelectComponent implements ControlValueAccessor {
  selected: string = '';
  @Input() title = '请选择头像';
  @Input() items: string[] = [];
  @Input() cols = 6;
  @Input() rowHeight = '64px';
  @Input() itemWidth = '80px';

  // 即能处理图形，又能处理图片
  @Input() useSvgIcon = false;
  @Output() itemChange = new EventEmitter<string>();

  constructor() { }

  private propagateChange = (_: any) => { };

  // 写入控件值
  writeValue(obj: any): void {
    this.selected = obj;
  }
  // 当表单控件值改变时，函数 fn 会被调用
  // 这也是我们把变化 emit 回表单的机制
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

  // 验证表单
  validate(c: FormControl): { [key: string]: any } {
    return this.selected ? null : {
      imageListInvalid: {
        valid: false
      }
    }
  }

  onChange(i: number) {
    this.selected = this.items[i];
    //  把变化通知表单
    this.propagateChange(this.selected);
    this.itemChange.emit(this.selected);
  }

}
