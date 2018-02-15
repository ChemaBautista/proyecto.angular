import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CalendarModule } from 'angular-calendar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { DemoUtilsModule } from '/home/ch3ma/projectsA4/calendarangular/demos/demo-modules/demo-utils/module';
import { LoginFormComponent } from './login-form/login-form.component';
import { CalendarGestionComponent } from './calendar-gestion/calendar-gestion.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    CalendarGestionComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    DemoUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
