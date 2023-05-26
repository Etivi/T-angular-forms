import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  emailCtrl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]);



  constructor() {
    this.emailCtrl.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value)
    })
  }

  getEmail(event : Event) {
    event.preventDefault()
    console.log(this.emailCtrl.value)
  }

}

//https://gist.github.com/nicobytes/4b583a0f5a769c566ba7659170d48f6b tutorial
