
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
import { AssistantInterface } from 'src/app/models/assistance.model';


@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.scss']
})
export class AssistanceComponent {
  displayedColumns: string[] = ['User Name', 'Email', 'Phone', 'Train', 'Time', 'Start', 'Departure','Action'];
  dataSource: MatTableDataSource<AssistantInterface>;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;




  constructor(public dialog: MatDialog) {
  
    var data:Array<AssistantInterface>=[
      {'username':'dd', 'email':'user@mail.com', 'phone':'0723383833', 'train':'gebimanike', 'time':'8:00 a.m', 'start':'6:00 p.m', 'departure':'4', 'action':'reservation'},
      {'username':'dd', 'email':'user@mail.com', 'phone':'0723383833', 'train':'gebimanike', 'time':'8:00 a.m', 'start':'6:00 p.m', 'departure':'4', 'action':'reservation'},
      {'username':'dd', 'email':'user@mail.com', 'phone':'0723383833', 'train':'gebimanike', 'time':'8:00 a.m', 'start':'6:00 p.m', 'departure':'4', 'action':'reservation'},
      {'username':'dd', 'email':'user@mail.com', 'phone':'0723383833', 'train':'gebimanike', 'time':'8:00 a.m', 'start':'6:00 p.m', 'departure':'4', 'action':'reservation'},
      {'username':'dd', 'email':'user@mail.com', 'phone':'0723383833', 'train':'gebimanike', 'time':'8:00 a.m', 'start':'6:00 p.m', 'departure':'4', 'action':'reservation'},
      {'username':'dd', 'email':'user@mail.com', 'phone':'0723383833', 'train':'gebimanike', 'time':'8:00 a.m', 'start':'6:00 p.m', 'departure':'4', 'action':'reservation'},
      {'username':'dd', 'email':'user@mail.com', 'phone':'0723383833', 'train':'gebimanike', 'time':'8:00 a.m', 'start':'6:00 p.m', 'departure':'4', 'action':'reservation'}
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
