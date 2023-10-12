import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { CustomHttpInterceptor } from './services/spinner/http-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { TicketBookingComponent } from './components/ticket-booking/ticket-booking.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReservationHistoryComponent } from './components/reservation-history/reservation-history.component';
import { AssistanceComponent } from './components/assistance/assistance.component';
import { ProfileManagementComponent } from './components/profile-management/profile-management.component'; 
import { TrainScheduleManagementComponent } from './components/train-schedule-management/train-schedule-management.component'; 
import { CreateScheduleComponent } from './components/create-schedule/create-schedule.component';
import { SwiperModule } from 'swiper/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateTimePickerComponent } from './components/date-time-picker/date-time-picker.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    TicketBookingComponent,
    ProfileComponent,
    ReservationHistoryComponent,
    AssistanceComponent,
    ProfileManagementComponent,
    TrainScheduleManagementComponent,
    CreateScheduleComponent,
    DateTimePickerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxMaterialTimepickerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
