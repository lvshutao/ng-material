import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isDarkTheme = false;

  changeTheme(isChecked: boolean) {
    console.log(isChecked);
    this.isDarkTheme = isChecked;
  }
}
