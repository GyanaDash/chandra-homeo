import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TrainingComponent } from './training/training.component';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutUsComponent,
    AppointmentComponent,
    ContactUsComponent,
    TrainingComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
