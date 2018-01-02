import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener,ChangeDetectionStrategy } from '@angular/core';
import { cardAnim } from '../../../animates/card.anim';


@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
  animations: [
    cardAnim
  ],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProjectItemComponent implements OnInit {

  @Input() item: any;
  @Output() editClick = new EventEmitter<void>();
  @Output() inviteClick = new EventEmitter<void>();
  @Output() deleteClick = new EventEmitter<void>();

  // [@card]="cardState"
  @HostBinding('@card') cardState = "out";
  @HostListener('mouseenter') onMuuseEnter() {
    this.cardState = "hover";
  }
  @HostListener('mouseleave') onMuuseLeave() {
    this.cardState = "out";
  }

  constructor() {
  }

  ngOnInit() {
  }

  onEditClick(e: Event) {
    this.editClick.emit();
    e.stopPropagation();
  }

  onInviteClick(e: Event) {
    this.inviteClick.emit();
    e.stopPropagation();
  }

  onDeleteClick(e: Event) {
    this.deleteClick.emit();
    e.stopPropagation();
  }

}
