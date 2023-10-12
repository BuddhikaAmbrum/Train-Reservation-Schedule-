
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, SortDirection } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf, DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Ticket_Booking_DataInterface } from 'src/app/models/ticket_booking.model';

@Component({
  selector: 'app-reservation-history',
  templateUrl: './reservation-history.component.html',
  styleUrls: ['./reservation-history.component.scss']
})
export class ReservationHistoryComponent {
  displayedColumns: string[] = ['Train Name', 'Time', 'Start', 'Departure', 'Created', 'Last Update', 'Status', 'My Reservation', 'Action'];
  dataSource: MatTableDataSource<Ticket_Booking_DataInterface>;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;




  constructor(public dialog: MatDialog) {
  
    var data:Array<Ticket_Booking_DataInterface>=[
      {'train_name':'dd', 'time':'88:00', 'start':'8:00 p.m', 'departure':'18:00 p.m', 'created':'dsdsds', 'last_update':'6:00 p.m', 'status':'1', 'my_reservation':'4', 'action':'reservation'},
      {'train_name':'dd', 'time':'88:00', 'start':'8:00 p.m', 'departure':'18:00 p.m', 'created':'dsdsds', 'last_update':'6:00 p.m', 'status':'1', 'my_reservation':'4', 'action':'reservation'},
      {'train_name':'dd', 'time':'88:00', 'start':'8:00 p.m', 'departure':'18:00 p.m', 'created':'dsdsds', 'last_update':'6:00 p.m', 'status':'1', 'my_reservation':'4', 'action':'reservation'},
      {'train_name':'dd', 'time':'88:00', 'start':'8:00 p.m', 'departure':'18:00 p.m', 'created':'dsdsds', 'last_update':'6:00 p.m', 'status':'1', 'my_reservation':'4', 'action':'reservation'},
      {'train_name':'dd', 'time':'88:00', 'start':'8:00 p.m', 'departure':'18:00 p.m', 'created':'dsdsds', 'last_update':'6:00 p.m', 'status':'1', 'my_reservation':'4', 'action':'reservation'},
      {'train_name':'dd', 'time':'88:00', 'start':'8:00 p.m', 'departure':'18:00 p.m', 'created':'dsdsds', 'last_update':'6:00 p.m', 'status':'1', 'my_reservation':'4', 'action':'reservation'},
      {'train_name':'dd', 'time':'88:00', 'start':'8:00 p.m', 'departure':'18:00 p.m', 'created':'dsdsds', 'last_update':'6:00 p.m', 'status':'1', 'my_reservation':'4', 'action':'reservation'}
     ]

   
    this.dataSource = new MatTableDataSource(data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
