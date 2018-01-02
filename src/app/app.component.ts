import {Component} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDarkTheme = false;

  constructor(private oc: OverlayContainer) {

  }

  changeTheme(isChecked: boolean) {
    this.isDarkTheme = isChecked;
    if (isChecked) {
      this.oc.getContainerElement().classList.add('my-dark-theme');
    } else {
      this.oc.getContainerElement().classList.remove('my-dark-theme');
    }
  }
}
