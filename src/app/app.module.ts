import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';

import { NavigationComponent } from './components/navigation/navigation.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { InspeccionComponent } from './components/inspeccion/inspeccion.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { ListarComponent } from './components/cliente/listar/listar.component';
import { AgregarComponent } from './components/cliente/agregar/agregar.component';
import { AgregarVehiculoComponent } from './components/vehiculo/agregar/agregar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    VehiculoComponent,
    ClienteComponent,
    InspeccionComponent,
    ReportesComponent,
    ListarComponent,
    AgregarComponent,
    AgregarVehiculoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
