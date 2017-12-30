import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {

  constructor(// 需要接收数据
    @Inject(MAT_DIALOG_DATA) private data,
    // 需要往回传送数据
    private diaRef: MatDialogRef<ProjectNewComponent>,
    // 如果需要设置主题
    private oc: OverlayContainer) {
    if (Math.random() > 0.5) {
      oc.getContainerElement().classList.add('my-dark-theme');
    }
  }

  ngOnInit() {
    console.log('接收数据:', this.data);
  }

  enter() {
    this.diaRef.close('I received your message.');
  }

}
