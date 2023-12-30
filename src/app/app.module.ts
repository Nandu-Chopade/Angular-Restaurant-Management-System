import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { BestOfComponent } from './best-of/best-of.component';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';
import { PiechartsComponent } from './components/piecharts/piechart/piecharts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { GraphComponent } from './components/piecharts/graphs/graph.component';
import { MainchartsComponent } from './components/piecharts/maincharts.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    ForgetPasswordComponent,
    BestOfComponent,
    EventsComponent,
    PiechartsComponent,
    GraphComponent,
    MenuComponent,
    MainchartsComponent,
    
    

  ],
  imports: [
    BrowserModule,MaterialModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule,HttpClientModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
