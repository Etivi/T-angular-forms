import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent {
  form: FormGroup | any;

  constructor(
    private  formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.form =this.formBuilder.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      email: ['', [Validators.email]],
      edad: ['', [Validators.min(18), Validators.required]],
      text: ['', [Validators.maxLength(20), Validators.required]],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });

    this.form.valueChanges.pipe(debounceTime(500)).subscribe((value: any) => {
      console.log(value);
    });
  }

  enviarForm(event: Event){
    event.preventDefault()
    if (this.form.valid){
    const value = this.form.value
    console.log(value)
    }
  }
}
