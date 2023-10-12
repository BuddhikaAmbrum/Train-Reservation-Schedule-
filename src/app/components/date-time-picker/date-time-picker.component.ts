import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import * as moment from 'moment';
@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss']
})
export class DateTimePickerComponent implements OnInit {
  selected_date: string | undefined;
  maxDate = moment(new Date()).format("YYYY-MM-DD");
  constructor(
    public dialogRef: MatDialogRef<DateTimePickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.createVIP.value.time = data.time;
  if(data.no_max_date){
    this.maxDate="";
  }
  }
  createVIP: FormGroup = new FormGroup({

    time: new FormControl(''),

  });
  ngOnInit(): void {
  }
  darkTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#dfb9f0',
      buttonColor: '#fff'
    },
    dial: {
      dialBackgroundColor: '#702f8b',
    },
    clockFace: {
      clockFaceBackgroundColor: '#702f8b',
      clockHandColor: '#7a066b',
      clockFaceTimeInactiveColor: '#fff'
    }
  };


  oncancelClick(): void {
    if (this.createVIP.value.time) {
      this.data.time = this.createVIP.value.time;
    }


    this.dialogRef.close(this.data);
  }

}
