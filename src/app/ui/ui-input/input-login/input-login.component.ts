import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input-login',
  templateUrl: './input-login.component.html',
  styleUrls: ['./input-login.component.css']
})
export class InputLoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    // this.form = new FormGroup({
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('',[Validators.required])
    // })

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email, this.validate]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit({ value, valid }, ev: Event) {
    console.log(JSON.stringify(value));
    console.log(JSON.stringify(valid));
  }

  // 自定义的控件 
  validate(c: FormControl): { [key: string]: any } {
    if (!c.value) {
      return null;
    }
    const pattern = /^wang+/;
    if (pattern.test(c.value)) {
      return null;
    }
    return {
      wang: '必须以 wang 开头'
    }
  }
}
