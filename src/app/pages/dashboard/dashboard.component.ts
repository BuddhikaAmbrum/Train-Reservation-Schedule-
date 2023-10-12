import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
log_user_type=1;
selected_page=0;
  navigation(para: any) {
    if (para==0) {
      this.selected_page=0;
    }
    else if(para==1){
      this.selected_page=1
    }
  }

}
