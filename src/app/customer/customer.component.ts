import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddService } from '../services';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customForm: FormGroup;
  submitted = false;
  loading = false;
  invalidInput: boolean;
  msg: string;

  constructor(
    private formBuilder: FormBuilder,
    private addService: AddService,
    private _location: Location) {
  }

  ngOnInit() {
    this.customForm = this.formBuilder.group({
      customName: ['', Validators.required],
      customAge: ['', Validators.required],
      customAddress: ['', Validators.required],
    });
  }

  backClicked() {
    this._location.back();
  }

  get f() { return this.customForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.customForm.invalid) { return; }

    this.loading = true;
    this.addService.createCustomOrder(this.f.customName.value, this.f.customAge.value, this.f.customAge.value)
      .pipe(first())
      .subscribe(
        data => {
          this.invalidInput = false;
          this.msg = 'Success!';
        },
        error => {
          this.invalidInput = true;
          this.msg = 'Fail!';
        });
  }

  cancel() {
    this._location.back();
  }

}
