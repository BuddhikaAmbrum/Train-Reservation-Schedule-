import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {

  }
  ngOnInit(): void {
  }
  toLogin() {
    var wi = 'auto';
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
   
    var mw = {maxWidth: wi}
    if (width > 720) {
      wi = '55vw'
      mw = { maxWidth: wi }
    }else{
     
        wi = '90vw'
        mw = { maxWidth: wi}
      
    }
    const dialogRef = this.dialog.open(LoginComponent, mw);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      } else {

      }
    });
  }
}
