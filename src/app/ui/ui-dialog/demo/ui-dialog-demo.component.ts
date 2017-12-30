import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {UiDialogConfirmComponent} from '../confirm/ui-dialog-confirm.component';

@Component({
  selector: 'app-ui-dialog-demo',
  templateUrl: './ui-dialog-demo.component.html',
  styleUrls: ['./ui-dialog-demo.component.css'],
  providers: []
})
export class UiDialogDemoComponent {

  name: string;

  constructor(private dialog: MatDialog) {
  }

  openDialog(): void {
    console.log('open dialog');
    let dialogRef = this.dialog.open(UiDialogConfirmComponent, {
      width: '250px',
      // position: {top: '0px', left: '0px'}, 设置位置
      data: {name: this.name}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.name = result;
    });
  }
}
