import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { TrainingComponent } from './training/training.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'training', component: TrainingComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
