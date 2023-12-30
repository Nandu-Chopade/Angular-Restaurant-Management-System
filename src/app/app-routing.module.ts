import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { BestOfComponent } from './best-of/best-of.component';
import { EventsComponent } from './events/events.component';
import { PiechartsComponent } from './components/piecharts/piechart/piecharts.component';
import { GraphComponent } from './components/piecharts/graphs/graph.component';
import { MainchartsComponent } from './components/piecharts/maincharts.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {path:'',redirectTo:'/dashboard', pathMatch:'full'},
  {path:'',component:NavbarComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'register',component:RegisterComponent},
  {path:"forget-password", component:ForgetPasswordComponent},
  {path:'best-of', component:BestOfComponent},
  {path:'events',component:EventsComponent},
  {path:"charts", component:PiechartsComponent},
  {path:'graphs',component:GraphComponent},
  {path:'mainchart', component:MainchartsComponent},
  {path:'menu', component:MenuComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
