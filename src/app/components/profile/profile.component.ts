import { Component,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(){

  }
  signin: FormGroup = new FormGroup({
    nic: new FormControl('', [ Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(3)]),
    phone: new FormControl('', [Validators.required, Validators.min(9)]),
    address: new FormControl('', [Validators.required, Validators.min(9)]),
  });

  hide = true;
  errors: any = [];

}
