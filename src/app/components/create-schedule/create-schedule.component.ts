import { Component,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { DateTimePickerComponent } from '../date-time-picker/date-time-picker.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.scss']
})
export class CreateScheduleComponent {

  constructor( private dialog: MatDialog,   public dialogRef: MatDialogRef<CreateScheduleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      if(data.schedule){
        this.signin= new FormGroup({
          train: new FormControl(data.schedule.tain, [ Validators.required]),
        
          start: new FormControl(data.schedule.start, [Validators.required]),
          departure: new FormControl(data.schedule.departure, [Validators.required, Validators.min(3)]),
         });

         this.selectedDate = moment(data.schedule.start).format('YYYY-MM-DD');
  this.selectedTime= moment(data.schedule.start).format('hh:mm');
      }

  }
  selectedDate: any = (moment().subtract(7, 'days')).format('YYYY-MM-DD');
  selectedTime: any = "00:00";
  selectedDate1: any = moment().format('YYYY-MM-DD');
  selectedTime1: any = "23:59";
  signin: FormGroup = new FormGroup({
    train: new FormControl('', [ Validators.required]),
   
    start: new FormControl('', [Validators.required]),
    departure: new FormControl('', [Validators.required, Validators.min(3)]),
   });

  hide = true;
  errors: any = [];
  opendatetimerpicker() {
    var data = {
      date: moment().format('YYYY-MM-DD'),
      time: '00:00',
      no_max_date: true,

    }
    const dialogRef = this.dialog.open(DateTimePickerComponent, {
      maxWidth: '500px',
      width: 'auto',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.selectedDate = moment(result.date).format('YYYY-MM-DD');
        this.selectedTime = result.time
        if (!this.selectedDate1) {
          this.selectedDate1 = moment(new Date).format('YYYY-MM-DD');
          this.selectedTime1 = '23:59';
        }
        var diff_days = moment(this.selectedDate).diff(moment(this.selectedDate1), 'days')
        if (diff_days > 0) {
          this.selectedDate1 = moment(result.date).format('YYYY-MM-DD');
          this.selectedTime1 = "23:59";
        }

       
      }
    });
  }
  sendData(){
    var data={
      tain:this.signin.value.train,
      time: this.selectedDate+" "+ this.selectedTime,
      start:this.signin.value.start,
      departure:this.signin.value.departure,
    }
    this.dialogRef.close(data);
  }
}
