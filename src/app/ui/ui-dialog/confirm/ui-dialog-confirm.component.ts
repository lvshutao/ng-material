import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-ui-dialog-confirm',
  templateUrl: './ui-dialog-confirm.component.html',
  styleUrls: ['./ui-dialog-confirm.component.css']
})
// 注意：此对话框组件必须放置到模块的 entryComponents 中
export class UiDialogConfirmComponent {

  constructor(// 如果你不需要往回传送数据，那么也可以不写
    public dialogRef: MatDialogRef<UiDialogConfirmComponent>,
    // 如果你不想接收数据，下面的注入可以不写
    @Inject(MAT_DIALOG_DATA) public data: any,
    // 如果需要支持主题切换，则还需要使用 OverlayContainer
    private oc: OverlayContainer) {
    if (Math.random() > 0.5) {
      oc.getContainerElement().classList.add('my-dark-theme');
    }
    console.log('接收到的数据:', data);
  }

  // 当关闭对话框时，你还可以发送一个值
  // 稍后组件将可以通过 subscribe 获取到这个值
  closeDialog() {
    this.dialogRef.close({value: 'say something.'});
  }
}
