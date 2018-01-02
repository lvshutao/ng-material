import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { DragDropService } from '../drag-drop.service';

/**
 * 错误集
 * 多次将 drag 写成 drap
 * 多次将 onDragXxx 写成了 onDrapXxx
 */
@Directive({
  selector: '[appDrag][dragTag][draggedclass][dragData]'
})
export class DragDirective {

  private _isDraggable = false;
  @Input() draggedclass: string;
  @Input() dragTag: string;
  @Input() dragData: any;


  // 允许通过 appDrag="true" 或者 appDrag="false" 的形式来赋值
  @Input('appDrag')
  set isDraggable(draggable: boolean) {
    this._isDraggable = draggable;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${draggable}`);
    
  }

  // 直接当成属性使用，即你可以直接使用 this.isDraggable
  get isDraggable() {
    return this._isDraggable;
  }

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService) { }

  @HostListener('dragstart', ['$event'])
  onDragStart(ev: Event) {
    // 如果拖拽的是当前组件，则为其添加珍上 class
    if (this.el.nativeElement === ev.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedclass);
      this.service.setDragData({ tag: this.dragTag, data: this.dragData });
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedclass);
    }
  }



}
