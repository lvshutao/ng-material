import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-ui-grid-list',
  templateUrl: './ui-grid-list.component.html',
  styleUrls: ['./ui-grid-list.component.css']
})
export class UiGridListComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form: FormGroup;
  items: string[] = [];

  private readonly avatarName = 'avatars';

  ngOnInit() {
    for (let i = 1; i <= 16; i++) {
      // svg-x 指的是 avatars 中每个 svg 的 id
      this.items.push(`avatars:svg-${i}`);
    }

    const img = `${this.avatarName}:svg-${Math.floor(Math.random() * 16).toFixed(0)}`
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      repeat: ['', Validators.required],
      avatar: [img]
    })
  }

  onSubmit({ value, valid }, ev: Event) {

  }

}
