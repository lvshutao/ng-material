import { Component, OnInit, Input, Output, EventEmitter,HostListener } from '@angular/core';
import { itemAnim } from '../../../animates/item.anim';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  animations: [
    itemAnim
  ]
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Input() avatar;
  @Output() updateTask = new EventEmitter<void>();

  widthPriority = 'in';
  @HostListener('mouseenter') onMuuseEnter() {
    this.widthPriority = "out";
  }
  @HostListener('mouseleave') onMuuseLeave() {
    this.widthPriority = "in";
  }

  constructor() {
  }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
  }

  onItemClick() {
    this.updateTask.emit();
  }

  onCheckBox(e: Event) {
    e.stopPropagation()
  }

}
