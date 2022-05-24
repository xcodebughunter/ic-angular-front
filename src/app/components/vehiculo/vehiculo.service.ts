import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Vehiculo } from './vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http:HttpClient) {}

  getAll(){
    return this.http.get<Vehiculo>("http://localhost:8080/api/vehiculo");
  }
}
