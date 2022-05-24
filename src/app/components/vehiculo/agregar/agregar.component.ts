import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'agregar-vehiculo',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarVehiculoComponent implements OnInit {

  constructor(private _vs:VehiculoService) { }

  ngOnInit(): void {
  }

}
