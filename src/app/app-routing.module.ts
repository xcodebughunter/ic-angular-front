import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineAll } from 'rxjs-compat/operator/combineAll';
import { ClienteComponent } from './components/cliente/cliente.component';
import { InspeccionComponent } from './components/inspeccion/inspeccion.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';

const routes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: NavigationComponent,
    children:[
      {path: '', component:ReportesComponent},
      {path: 'reportes', component:ReportesComponent},
      {path: 'vehiculos', component:VehiculoComponent},
      {path: 'clientes', component:ClienteComponent},
      {path: 'inspecciones', component:InspeccionComponent}
    ]
  }
  /*{path:'', component: ReportesComponent},
  {path:'reportes', component:ReportesComponent},
  {path:'vehiculos', component:VehiculoComponent},
  {path:'clientes', component:ClienteComponent},
  {path:'inspecciones', component:InspeccionComponent},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
