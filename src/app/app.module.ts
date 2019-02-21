import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { LoginComponent } from './login/login.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { CoursebarComponent } from './coursebar/coursebar.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { FormsModule} from '@angular/forms';
import { ScientificCalcPipe } from './scientific-calc.pipe';
import { TimezoneComponent } from './timezone/timezone.component';
import {DatePipe} from '@angular/common';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContainerComponent,
    LoginComponent,
    StudentlistComponent,
    CoursebarComponent,
    CurrencyConverterComponent,
    ScientificCalcPipe,
    TimezoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers:[DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
