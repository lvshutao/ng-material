import { Directive, HostListener, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';
import { DragDropService, DragData } from '../drag-drop.service';
import { Observable } from 'rxjs/Observable';

@Directive({
  selector: '[appDrop][dropTags][dropEnterClass]'
})
export class DropDirective {

  @Output() dropped: EventEmitter<DragData> = new EventEmitter();
  @Input() dropTags: string[] = []; // 放的区域是可以多个的
  @Input() dropEnterClass: string = '';

  private data: Observable<DragData | null>;
  // 为了支持多级拖拽，需要阻止事件的冒泡

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService
  ) {
    this.data = this.service.getDragData().take(1);
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();

    if (this.el.nativeElement === ev.target) {
      this.data.subscribe(dragData => {
        // dragTag 是一个数组
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.addClass(this.el.nativeElement, this.dropEnterClass);
          this.rd.setProperty(this.el.nativeElement, 'dataTransfer.effectAllowed', 'all');
          this.rd.setProperty(this.el.nativeElement, 'dataTransfer.dropEffect', 'move');
        }
      })

    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.data.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData!.tag) > -1) {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
          this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'move');
        } else {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
          this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'none');
        }
      })
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();

    if (this.el.nativeElement === ev.target) {
      this.data.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData!.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dropEnterClass);
        }
      })
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.data.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData!.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dropEnterClass);
          this.dropped.emit(dragData!);
          this.service.clearDragData();
        }
      })

    }
  }



}
